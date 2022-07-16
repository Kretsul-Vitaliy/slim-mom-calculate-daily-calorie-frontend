import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import {
  Calendar,
  ImagesCalendar,
  CalendsrContainer,
} from './DiaryDateCalendar.styled';
import calendarImg from '../../images/calendar/calendar.svg';
import PropTypes from 'prop-types';

const DiaryDateСalendar = ({ dateCalendar, setDateCalendar }) => {
  // eslint-disable-next-line no-unused-vars
  const [dateNow, setDateNow] = useState(new Date());

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

DiaryDateСalendar.protoTypes = {
  dateCalendar: PropTypes.string.isRequired,
  setDateCalendar: PropTypes.func.isRequired,
};
