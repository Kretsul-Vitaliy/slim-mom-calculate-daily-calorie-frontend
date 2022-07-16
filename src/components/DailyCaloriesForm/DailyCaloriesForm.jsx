import { useFormik } from 'formik';
import useModal from '../../hooks/useModal';
import Button from '../Button';
import Loader from '../Loader';
import { validate } from './validate';
import { useSelector, useDispatch } from 'react-redux';
import {
  dailyCalories,
  dailyCaloriesAuth,
} from '../../redux/dailyCalories/dailyCaloriesOperation';
import {
  getDailyCaloriesPublic,
  getLoading,
} from '../../redux/dailyCalories/dailyCaloriesSelector';
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
import { getIsAuthenticated } from '../../redux/auth/authSelector';
import DailyCalorieIntake from '../DailyCalorieIntake/DailyCalorieIntake';

const DailyCaloriesForm = () => {
  const { isShowing, toggle } = useModal();

  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const dailyNormCalories = useSelector(getDailyCaloriesPublic);

  const isAuthenticated = useSelector(getIsAuthenticated);
  const dailyNormCaloriesPrivate = useSelector(
    state => state?.dailyCalories?.dailyCalories?._doc?.calories
  );
  const categories = useSelector(
    state => state?.dailyCalories?.dailyCalories?.categories
  );
  const categoriesPrivate = useSelector(
    state => state?.dailyCalories?.dailyCalories?._doc?.categories
  );

  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: 1,
    },
    validate: validate,

    onSubmit: values => {
      console.log(isAuthenticated);
      if (isAuthenticated) {
        dispatch(dailyCaloriesAuth(values));
      } else {
        dispatch(dailyCalories(values));
      }
      toggle();
      formik.resetForm();
    },
  });

  const { height, age, currentWeight, desiredWeight, bloodType } =
    formik.values;

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <Modal
          isShowing={isShowing}
          hide={toggle}
          children={
            isAuthenticated ? (
              <DailyCalorieIntake
                calories={dailyNormCaloriesPrivate}
                products={categoriesPrivate}
              />
            ) : (
              <DailyCalorieIntake
                calories={dailyNormCalories}
                products={categories}
              />
            )
          }
        />
      )}
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
                onChange={formik.handleChange}
              />
              <RadioLabel htmlFor="bloodType1">1</RadioLabel>
              <RadioInput
                type="radio"
                name="bloodType"
                value="2"
                id="bloodType2"
              />
              <RadioLabel htmlFor="bloodType2">2</RadioLabel>
              <RadioInput
                type="radio"
                name="bloodType"
                value="3"
                id="bloodType3"
              />
              <RadioLabel htmlFor="bloodType3">3</RadioLabel>
              <RadioInput
                type="radio"
                name="bloodType"
                value="4"
                id="bloodType4"
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
