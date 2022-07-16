import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '../Button';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { getDataProducts } from '../../services/apiService';
import { useState, useEffect } from 'react';
import {
  ProductInput,
  InputContainer,
  GramsInput,
  ProductsInput,
  HelpingForm,
  ModalSubmitButton,
} from './DiaryAddProductForm.styled';

const DiaryAddProductForm = ({
  setSelectedProduct,
  setGramsOfProducts,
  toggle,
  isShowing,
}) => {
  const [possibleProducts, setPossibleProducts] = useState(null);
  const [savedProduct, setSavedProduct] = useState(null);

  const formSchema = yup.object().shape({
    product: yup
      .string()
      .typeError('Введіть назву продукту')
      .matches(
        '^[A-Za-zА-Яа-яЁёІіЇїЄє. ]+$',
        'The name must consist only of letters'
      )
      .required('Name of product is required'),
    grams: yup
      .number()
      .max(1000)
      .min(20)
      .typeError('Enter the number of grams')
      .required('Grams of product is required'),
  });

  const formik = useFormik({
    initialValues: {
      product: '',
      grams: '',
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      setSelectedProduct(savedProduct);
      setGramsOfProducts(formik.values.grams);
      resetForm({ values: '' });
      setSavedProduct(null);
      if (isShowing) toggle();
    },
  });

  useEffect(() => {
    if (formik.values.product.length === 3) {
      getDataProducts(formik.values.product)
        .then(values => setPossibleProducts(values.data.products))
        .catch(error => console.log(error));
    }
  }, [formik.values.product]);

  const searchAndSendProduct = id => {
    const product = possibleProducts.filter(product => product.id === id);
    formik.values.product = product[0].title.ua;
    console.log(formik.values.product);
    setSavedProduct(...product);
  };

  const handleClick = event => {
    if (event.target.id !== 'variants') {
      setPossibleProducts(null);
    }
  };

  useEffect(() => {
    const inp = document.getElementsByTagName('input');
    for (let i = 0; i < inp.length; i++) {
      inp[i].setAttribute('autocomplete', 'off');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <InputContainer>
          <ProductInput>
            <ProductsInput
              type="text"
              name="product"
              id="variants"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.product}
              placeholder="Enter product name"
              autocomplete="ofdasdhasfhascbafndfhasbdafnadfhgsaDBSDGMFHKJWTHGASDBHAff"
            />
            {formik.touched.product && formik.errors.product && (
              <div>
                <p>{formik.errors.product}</p>
              </div>
            )}
          </ProductInput>

          <ProductInput>
            <GramsInput
              type="text"
              name="grams"
              id="variants"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.grams}
              placeholder="Grams"
              autocomplete="oASDUHGFASJDBGJAS;DHGLASK;DNVAS;BJAS;FJBfff"
            />
            {formik.touched.grams && formik.errors.grams && (
              <div>
                <p>{formik.errors.grams}</p>
              </div>
            )}
          </ProductInput>

          <Button
            // disabled={!isValid && !dirty}
            type="submit"
            size="addRoundBtn"
          >
            +
          </Button>
        </InputContainer>
        <ModalSubmitButton>
          <Button type="submit" size="addBtn">
            Add
          </Button>
        </ModalSubmitButton>
      </form>
      {possibleProducts && possibleProducts.length !== 0 && (
        <HelpingForm>
          <ul>
            <Scrollbars autoHeight>
              {possibleProducts.map(values => {
                return (
                  <li
                    id="variants"
                    style={{
                      backgroundColor:
                        values.id === savedProduct?.id &&
                        'var(--header-divider-color)',
                      color:
                        values.id === savedProduct?.id && 'var(--extra-color)',
                    }}
                    onClick={() => {
                      searchAndSendProduct(values.id);
                      setTimeout(() => {
                        setPossibleProducts(null);
                      }, 500);
                    }}
                    key={values.id}
                  >
                    {values.title.ua} / {values.calories} ccal
                  </li>
                );
              })}
            </Scrollbars>
          </ul>
        </HelpingForm>
      )}
    </div>
  );
};

export default DiaryAddProductForm;
