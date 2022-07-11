import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import axios from 'axios';
import {
  Wrapper,
  Title,
  Input,
  RadioTitle,
  RadioGroup,
  RadioLabel,
  RadioInput,
  Container,
  Box,
  InputBox,
  Label,
} from './DailyCaloriesForm.styled';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// "ФОРМУЛА ДЛЯ РОЗРАХУНКУ ДЕННОЇ НОРМИ КАЛОРІЙ ЖІНКАМ
// 10 * вага + 6.25 * зріст - 5 * вік - 161 - 10 * (вага - бажана вага)"

const DailyCaloriesForm = () => {
  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: 1,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });
  const { height, age, currentWeight, desiredWeight, bloodType } =
    formik.values;

  // const getDailyCaloriesNormal = () =>
  //   10 * currentWeight +
  //   6.25 * height -
  //   5 * age -
  //   161 -
  //   10 * (currentWeight - desiredWeight);

  // const getProducts = async () => {
  //   const { data } = await axios.post(`dailycalories`);
  //   return data;
  // };

  return (
    <Wrapper>
      <Title>
        Calculate your daily calorie
        <br /> intake right now
      </Title>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <Box>
            <InputBox>
              <Input
                id="height"
                name="height"
                type="number"
                onChange={formik.handleChange}
                value={height}
                required
              />
              <Label htmlFor="height">Height *</Label>
            </InputBox>
            <InputBox>
              <Input
                id="age"
                name="age"
                type="number"
                onChange={formik.handleChange}
                value={age}
                required
              />
              <Label htmlFor="age">Age *</Label>
            </InputBox>
            <InputBox>
              <Input
                id="currentWeight"
                name="currentWeight"
                type="number"
                onChange={formik.handleChange}
                value={currentWeight}
                required
              />
              <Label htmlFor="currentWeight">Current weight *</Label>
            </InputBox>
          </Box>
          <div>
            <InputBox>
              <Input
                id="desiredWeight"
                name="desiredWeight"
                type="number"
                onChange={formik.handleChange}
                value={desiredWeight}
                required
              />{' '}
              <Label htmlFor="desiredWeight">Desired weight *</Label>
            </InputBox>
            <RadioTitle id="bloodType">Blood type *</RadioTitle>
            <RadioGroup
              role="group"
              aria-labelledby="bloodType"
              value={bloodType}
              onChange={formik.handleChange}
            >
              <RadioLabel>
                1
                <RadioInput type="radio" name="bloodType" value="1" />
              </RadioLabel>
              <RadioLabel>
                2
                <RadioInput type="radio" name="bloodType" value="2" />
              </RadioLabel>
              <RadioLabel>
                3
                <RadioInput type="radio" name="bloodType" value="3" />
              </RadioLabel>
              <RadioLabel>
                4
                <RadioInput type="radio" name="bloodType" value="4" />
              </RadioLabel>
            </RadioGroup>
          </div>
        </Container>
        <Button size="long" type="submit">
          Start losing weight
        </Button>
      </form>
    </Wrapper>
  );
};
export default DailyCaloriesForm;
