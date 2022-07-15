import Container from '../../components/Container';
import DiaryDateCakendar from '../../components/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import { useState } from 'react';
import { getIsUserAuthorizate } from '../../redux/auth/authSelector';
import { useSelector } from 'react-redux/es/exports';

const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [gramsOfProducts, setGramsOfProducts] = useState(null);
  const persistToken = useSelector(getIsUserAuthorizate);

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
          setSelectedProduct={setSelectedProduct}
          gramsOfProducts={gramsOfProducts}
          persistToken={persistToken}
        />
      </Container>
    </>
  );
};

export default DiaryPage;
