import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../Button';
import {
  ProductInput,
  InputContainer,
  GramsInput,
  ProductsInput,
} from './DiaryAddProductForm.styled';
import plus from '../../images/calendar/plus.svg';

const DiaryAddProductForm = ({ dateCalendar }) => {
  const validationsSchema = yup.object().shape({
    product: yup
      .string()
      .typeError('Введіть назву продукту')
      .matches('^[а-яА-ЯєёЁіa-zA-Z]+$', 'The name must consist only of letters')
      .min(3)
      .max(15)
      .required('Is required'),
    grams: yup
      .number()
      .max(1000)
      .min(50)
      .typeError('Enter the number of grams')
      .required('Is required'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          product: '',
          grams: '',
        }}
        validateOnBlur
        onSubmit={values => console.log(values)}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <InputContainer>
            <ProductInput>
              <ProductsInput
                type="text"
                name="product"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.product}
                placeholder="Enter product name"
              />
              {touched.product && errors.product && (
                <div>
                  <p>{errors.product}</p>
                </div>
              )}
            </ProductInput>

            <ProductInput>
              <GramsInput
                type="text"
                name="grams"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.grams}
                placeholder="Grams"
              />
              {touched.grams && errors.grams && (
                <div>
                  <p>{errors.grams}</p>
                </div>
              )}
            </ProductInput>

            <Button
              // disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type="submit"
              size="addRoundBtn"
            >
              <img src={plus} alt="" width="14" height="14" />
            </Button>
          </InputContainer>
        )}
      </Formik>
    </div>
  );
};

export default DiaryAddProductForm;
