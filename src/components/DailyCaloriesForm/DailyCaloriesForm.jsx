import { useFormik } from 'formik';
// import * as Yup from 'yup';
import useModal from '../../hooks/useModal';
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
import Modal from '../Modal/Modal';
import { useState } from 'react';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const DailyCaloriesForm = () => {
  const { isShowing, toggle } = useModal();
  const [calories, setCalories] = useState(0);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState();

  // const validationSchema = Yup.object().shape({
  //   height: Yup.number()
  //     .min(100, 'Value must be greater than or equal to 100!')
  //     .required('Required'),
  //   age: Yup.number()
  //     .min(18, 'Value must be greater than or equal to 18!')
  //     .required('Required'),
  //   currentWeight: Yup.number()
  //     .min(20, 'Value must be greater than or equal to 20!')
  //     .required('Required'),
  //   desiredWeight: Yup.number()
  //     .min(20, 'Value must be greater than or equal to 20!')
  //     .required('Required'),
  // });

  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: 1,
    },
    onSubmit: values => {
      getCalories(values);
      formik.resetForm();
    },
    // validationSchema,
  });
  const { height, age, currentWeight, desiredWeight, bloodType } =
    formik.values;

  const getCalories = values => {
    const data = JSON.stringify(values);
    const headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post('dailycalories/public', data, {
        headers,
      })
      .then(res => {
        console.log(res.data);
        const { dailyCalories, categories, _id } = res.data.data;
        setCalories(dailyCalories);
        setProducts([...categories]);
        setId(_id);
        toggle();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        calories={calories}
        products={products}
        id={id}
      />
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
                <RadioInput
                  type="radio"
                  name="bloodType"
                  value="1"
                  defaultChecked
                />
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
