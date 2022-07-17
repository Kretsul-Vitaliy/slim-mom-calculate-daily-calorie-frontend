import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '../Button';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { getDataProducts } from '../../services/apiService';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';
import {
  ProductInput,
  InputContainer,
  GramsInput,
  ProductsInput,
  HelpingForm,
  ModalSubmitButton,
} from './DiaryAddProductForm.styled';
import PropTypes from 'prop-types';

const DiaryAddProductForm = ({
  setSelectedProduct,
  setGramsOfProducts,
  toggle,
  isShowing,
}) => {
  const [possibleProducts, setPossibleProducts] = useState(null);
  const [savedProduct, setSavedProduct] = useState(null);

  const { t, i18n } = useTranslation()

  const formSchema = yup.object().shape({
    product: yup
      .string()
      .typeError(t?.('dpf.productPlaceholder'))
      .matches(
        '^[A-Za-zА-Яа-яЁёІіЇїЄє%)(-. ]+$',
        t?.('dpf.productContain')
      )
      .required(t?.('auth.verReq')),
    grams: yup
      .number()
      .max(5000)
      .min(0)
      .typeError(t?.('dpf.enterGram'))
      .required(t?.('auth.verReq')),
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
        .then(values => {
          if (values.data.total === 0) {
            toast.error(
              t?.('dpf.noInData'),
              {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }
          console.log(values);
          setPossibleProducts(values.data.products);
        })
        .catch(error => console.log(error));
    }
  }, [formik.values.product, t]);

  const searchAndSendProduct = id => {
    const product = possibleProducts.filter(product => product.id === id);
    formik.values.product = product[0].title[i18n.language];
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
              placeholder={t?.('dpf.typeProduct')}
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
              placeholder={t?.('dpf.grams')}
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
            {t?.('dpf.addBtn')}
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
                    {values.title[i18n.language]} / {values.calories} ccal
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

DiaryAddProductForm.protoTypes = {
  setSelectedProduct: PropTypes.func.isRequired,
  setGramsOfProducts: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  isShowing: PropTypes.bool.isRequired,
};
