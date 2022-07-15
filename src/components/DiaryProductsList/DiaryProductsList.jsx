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
  persistToken,
  setSelectedProduct,
}) => {
  const [productsItem, setProductsItem] = useState(null);
  const [deletedProduct, setDeletedProduct] = useState(null);

  useEffect(() => {
    console.log(deletedProduct);
    if (deletedProduct) {
      deleteCalendarProducts(persistToken, deletedProduct).then(values => {
        setDeletedProduct(null);
        console.log(values);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletedProduct]);

  useEffect(() => {
    console.log('Worked');
    getCalendarProducts(persistToken, dateCalendar).then(values =>
      setProductsItem(values.data)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateCalendar, deletedProduct]);

  useEffect(() => {
    if (selectedProduct) {
      const { title, calories } = selectedProduct;
      setCalendarProducts(
        title.ua,
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
        />
      )}
    </ProductsContainer>
  );
};

export default DiaryProductsList;
