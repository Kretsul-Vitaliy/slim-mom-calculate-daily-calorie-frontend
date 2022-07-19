import DiaryProductsListitem from '../DiaryProductsListItem';
import {
  getCalendarProducts,
  setCalendarProducts,
  deleteCalendarProducts,
} from '../../services/apiService';
import { useState, useEffect } from 'react';
import { ProductsContainer } from './DiaryProductsList.styled';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const DiaryProductsList = ({
  dateCalendar,
  selectedProduct,
  gramsOfProducts,
  persistToken,
  setSelectedProduct,
  productsItem,
  setProductsItem,
}) => {
  // const [productsItem, setProductsItem] = useState(null);
  const [deletedProduct, setDeletedProduct] = useState(null);

  const { i18n } = useTranslation();

  useEffect(() => {
    if (deletedProduct) {
      deleteCalendarProducts(persistToken, deletedProduct).then(values =>
        setDeletedProduct(null)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletedProduct]);

  useEffect(() => {
    // console.log('Worked');
    getCalendarProducts(persistToken, dateCalendar).then(values =>
      setProductsItem(values.data)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateCalendar, deletedProduct]);

  useEffect(() => {
    if (selectedProduct) {
      const { title, calories } = selectedProduct;

      setCalendarProducts(
        title[i18n.language],
        gramsOfProducts,
        calories,
        dateCalendar,
        persistToken
      )
        .then(value => {
          setProductsItem([value.data._doc, ...productsItem]);
          setSelectedProduct(null);
        })
        .catch(error => console.log(error));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateCalendar, productsItem, selectedProduct]);

  return (
    <ProductsContainer>
      {productsItem && (
        <DiaryProductsListitem
          productsItem={Object.values(productsItem)}
          setDeletedProduct={setDeletedProduct}
          dateCalendar={dateCalendar}
        />
      )}
    </ProductsContainer>
  );
};

export default DiaryProductsList;

DiaryProductsList.protoTypes = {
  dateCalendar: PropTypes.string.isRequired,
  selectedProduct: PropTypes.shape({
    calories: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    groupBloodNotAllowed: PropTypes.arrayOf(PropTypes.bool),
    id: PropTypes.string,
    title: PropTypes.shape({
      ru: PropTypes.string,
      en: PropTypes.string,
      ua: PropTypes.string,
    }),
    weight: PropTypes.number,
    __v: PropTypes.number,
  }),
  gramsOfProducts: PropTypes.number,
  persistToken: PropTypes.string.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
  productsItem: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      nameProduct: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
      _id: PropTypes.string,
    })
  ),
  setProductsItem: PropTypes.func.isRequired,
};
