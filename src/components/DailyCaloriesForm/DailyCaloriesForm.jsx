import { useFormik } from 'formik';
import useModal from '../../hooks/useModal';
import Button from '../Button';
import axios from 'axios';
import { validate } from './validate';
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
  Line,
  ErrorsInput,
} from './DailyCaloriesForm.styled';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { getIsAuthenticated } from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux';
import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const DailyCaloriesForm = () => {
  const { isShowing, toggle } = useModal();
  const [calories, setCalories] = useState(0);
  const [products, setProducts] = useState([]);

  const isAuthenticated = useSelector(getIsAuthenticated);
  const token = useSelector(state => state.auth.token);
  // const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2VkYWE0NzBmZWVkMjQ0ZTg1YjllOSIsImlhdCI6MTY1NzczNjA0NiwiZXhwIjoxNjU3NzM5NjQ2fQ.XABWk0NaK_Xi5AMg_YAJIp-42Pm7wB4gUmeKuunwYoE`;

  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '',
    },
    validate: validate,

    onSubmit: values => {
      console.log(values);
      if (isAuthenticated) {
        getCaloriesPrivate(values);
      } else {
        getCalories(values);
      }
      formik.resetForm();
    },
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
        const { dailyCalories, categories } = res.data.data;
        setCalories(dailyCalories);
        setProducts([...categories]);
        toggle();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getCaloriesPrivate = values => {
    const data = JSON.stringify(values);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    axios
      .post('dailycalories', data, {
        headers,
      })
      .then(res => {
        const { calories, categories } = res.data.data._doc;
        setCalories(calories);
        setProducts([...categories]);
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
        children={
          <DailyCalorieIntake calories={calories} products={products} />
        }
      />
      <Title>
        Calculate your daily calorie
        <br /> intake right now
      </Title>
      <form onSubmit={formik.handleSubmit}>
        <Container>
          <Box>
            <InputBox>
              {formik.errors.height && (
                <ErrorsInput>{formik.errors.height}</ErrorsInput>
              )}
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
              {formik.errors.age && (
                <ErrorsInput>{formik.errors.age}</ErrorsInput>
              )}
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
              {formik.errors.currentWeight && (
                <ErrorsInput>{formik.errors.currentWeight}</ErrorsInput>
              )}
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
          <Box>
            <InputBox>
              {formik.errors.desiredWeight && (
                <ErrorsInput>{formik.errors.desiredWeight}</ErrorsInput>
              )}

              <Input
                id="desiredWeight"
                name="desiredWeight"
                type="number"
                onChange={formik.handleChange}
                value={desiredWeight}
                required
              />
              <Label htmlFor="desiredWeight">Desired weight *</Label>
            </InputBox>
            <RadioTitle id="bloodType">Blood type *</RadioTitle>
            <Line />
            <RadioGroup
              required
              role="group"
              aria-labelledby="bloodType"
              value={bloodType}
              onChange={formik.handleChange}
            >
              <RadioInput
                type="radio"
                name="bloodType"
                value="1"
                id="bloodType1"
                defaultChecked
              />
              <RadioLabel htmlFor="bloodType1">1</RadioLabel>
              <RadioInput
                type="radio"
                name="bloodType"
                value="2"
                id="bloodType2"
                checked={bloodType.toString() === '2'}
                onChange={formik.handleChange}
              />
              <RadioLabel htmlFor="bloodType2">2</RadioLabel>
              <RadioInput
                type="radio"
                name="bloodType"
                value="3"
                id="bloodType3"
                checked={bloodType.toString() === '3'}
                onChange={formik.handleChange}
              />
              <RadioLabel htmlFor="bloodType3">3</RadioLabel>
              <RadioInput
                type="radio"
                name="bloodType"
                value="4"
                id="bloodType4"
                checked={bloodType.toString() === '4'}
                onChange={formik.handleChange}
              />
              <RadioLabel htmlFor="bloodType4">4</RadioLabel>
            </RadioGroup>
          </Box>
        </Container>
        <Button size="long" type="submit">
          Start losing weight
        </Button>
      </form>
    </Wrapper>
  );
};
export default DailyCaloriesForm;
