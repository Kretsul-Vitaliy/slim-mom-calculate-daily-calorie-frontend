import Container from '../../components/Container';
import DiaryDateCakendar from '../../components/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import { useState } from 'react';

const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [nameProduct, setNameProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [gramsOfProducts, setGramsOfProducts] = useState(null);

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
