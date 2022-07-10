import Header from '../../components/Header';
import DiaryDateCakendar from '../../components/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import { useState } from 'react';

const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Header />
      <DiaryDateCakendar
        dateCalendar={startDate}
        setDateCalendar={setStartDate}
      />
      <DiaryAddProductForm dateCalendar={startDate.toLocaleDateString()} />
    </>
  );
};

export default DiaryPage;
