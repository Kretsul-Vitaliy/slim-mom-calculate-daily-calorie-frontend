import { useFormik } from 'formik';
import useModal from '../../hooks/useModal';
import { Button, Loader, Modal, DailyCalorieIntake } from '../../components';
import { validate } from './validate';
import { useSelector, useDispatch } from 'react-redux';
import {
  getDailyCaloriesPublic,
  getDailyNormCaloriesPrivate,
  getCategoriesPublic,
  getCategoriesPrivate,
  getLoading,
  dailyCalories,
  dailyCaloriesAuth,
} from '../../redux/dailyCalories';
import { getIsAuthenticated } from '../../redux/auth';
import {
  Wrapper,
  ButtonContainer,
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
import { useTranslation } from 'react-i18next';

const initialValues = {
  height: '',
  age: '',
  currentWeight: '',
  desiredWeight: '',
  bloodType: 1,
};

const DailyCaloriesForm = () => {
  const { isShowing, toggle } = useModal();

  const dispatch = useDispatch();

  const loading = useSelector(getLoading);
  const dailyNormCalories = useSelector(getDailyCaloriesPublic);
  const isAuthenticated = useSelector(getIsAuthenticated);
  const dailyNormCaloriesPrivate = useSelector(getDailyNormCaloriesPrivate);
  const categories = useSelector(getCategoriesPublic);
  const categoriesPrivate = useSelector(getCategoriesPrivate);

  const formik = useFormik({
    initialValues: initialValues,
    validate: validate,

    onSubmit: values => {
      if (isAuthenticated) {
        dispatch(dailyCaloriesAuth(values));
      } else {
        dispatch(dailyCalories(values));
      }
      toggle();
      formik.resetForm();
    },
  });

  const { t } = useTranslation();

  const { height, age, currentWeight, desiredWeight, bloodType } =
    formik.values;

  return (
    <Wrapper>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        children={
          loading ? (
            <Loader />
          ) : isAuthenticated ? (
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
      <Title>
        {t?.('dcf.titleFir')}
        <br /> {t?.('dcf.titleSec')}
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

              <Label htmlFor="height">{t?.('dcf.height')} *</Label>
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
              <Label htmlFor="age">{t?.('dcf.age')} *</Label>
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
              <Label htmlFor="currentWeight">{t?.('dcf.curWeight')} *</Label>
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
              <Label htmlFor="desiredWeight">{t?.('dcf.desWeight')} *</Label>
            </InputBox>
            <RadioTitle id="bloodType">{t?.('dcf.bloodType')} *</RadioTitle>
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
        <ButtonContainer>
          {' '}
          <Button size="long" type="submit">
            {t?.('dcf.btn')}
          </Button>
        </ButtonContainer>
      </form>
    </Wrapper>
  );
};
export default DailyCaloriesForm;
