import Container from '../../components/Container';
import DiaryDateCakendar from '../../components/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../../redux/auth/authOperation';
// import {
//   nameProduct,
//   calories,
//   date,
//   dateId,
//   getLoading,
//   owner,
//   weight,
// } from '../../redux/products/ProductsSelector';
const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [gramsOfProducts, setGramsOfProducts] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Container>
        <DiaryDateCakendar
          dateCalendar={startDate}
          setDateCalendar={setStartDate}
        />
        <DiaryAddProductForm
          setSelectedProduct={setSelectedProduct}
          setGramsOfProducts={setGramsOfProducts}
        />
        <DiaryProductsList
          dateCalendar={startDate.toLocaleDateString()}
          selectedProduct={selectedProduct}
          gramsOfProducts={gramsOfProducts}
        />
      </Container>
    </>
  );
};

export default DiaryPage;
