import 'react-datepicker/dist/react-datepicker.css';
import {
  Calendar,
  ImagesCalendar,
  CalendsrContainer,
} from './DiaryDateCalendar.styled';
import calendarImg from '../../images/calendar/calendar.svg';

const DiaryDateСalendar = ({ dateCalendar, setDateCalendar }) => {
  // console.log(dateCalendar.toLocaleDateString());
  return (
    <CalendsrContainer>
      <Calendar
        dateFormat="dd.MM.yyyy"
        selected={dateCalendar}
        onChange={date => setDateCalendar(date)}
      ></Calendar>
      <ImagesCalendar src={calendarImg} alt="icon" />
    </CalendsrContainer>
  );
};

export default DiaryDateСalendar;
