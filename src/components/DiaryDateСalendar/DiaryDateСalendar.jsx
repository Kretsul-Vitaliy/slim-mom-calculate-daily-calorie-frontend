import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import {
  Calendar,
  ImagesCalendar,
  CalendsrContainer,
} from './DiaryDateCalendar.styled';
import calendarImg from '../../images/calendar/calendar.svg';

const DiaryDateСalendar = ({ dateCalendar, setDateCalendar }) => {
  const [dateNow, setDateNow] = useState(new Date());
  // console.log(dateCalendar.toLocaleDateString());
  return (
    <CalendsrContainer>
      <Calendar
        dateFormat="dd.MM.yyyy"
        maxDate={dateNow}
        selected={dateCalendar}
        onChange={date => setDateCalendar(date)}
      ></Calendar>
      <ImagesCalendar src={calendarImg} alt="icon" />
    </CalendsrContainer>
  );
};

export default DiaryDateСalendar;
