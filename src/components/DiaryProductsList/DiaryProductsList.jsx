import DiaryProductsListitem from '../DiaryProductsListItem';
import {
  getCalendarProducts,
  setCalendarProducts,
  deleteCalendarProducts,
} from '../../services/apiService';
import { useState, useEffect } from 'react';
import { ProductsContainer } from './DiaryProductsList.styled';

const DiaryProductsList = ({
  dateCalendar,
  selectedProduct,
  gramsOfProducts,
}) => {
  const [productsItem, setProductsItem] = useState(null);
  const [deletedProduct, setDeletedProduct] = useState(null);

  useEffect(() => {
    if (deletedProduct) {
      setProductsItem(productsItem.filter(obj => obj.id !== deletedProduct));
      deleteCalendarProducts(deletedProduct).then(values => {
        setDeletedProduct(null);
        console.log('Succes deleted');
      });
    }
  }, [deletedProduct]);

  useEffect(() => {
    console.log('Worked');
    getCalendarProducts(dateCalendar).then(values =>
      setProductsItem(values.data)
    );
  }, [dateCalendar, deletedProduct]);

  useEffect(() => {
    if (selectedProduct) {
      const { title, calories } = selectedProduct;
      setCalendarProducts(title.ua, gramsOfProducts, calories, dateCalendar)
        .then(value => setProductsItem([value.data._doc, ...productsItem]))
        .catch(error => console.log(error));
    }
  }, [selectedProduct]);
  return (
    <ProductsContainer>
      {productsItem && (
        <DiaryProductsListitem
          productsItem={Object.values(productsItem)}
          setDeletedProduct={setDeletedProduct}
        />
      )}
    </ProductsContainer>
  );
};

export default DiaryProductsList;
