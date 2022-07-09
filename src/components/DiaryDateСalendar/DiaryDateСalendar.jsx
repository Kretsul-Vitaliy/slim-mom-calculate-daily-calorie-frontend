import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import {
  Calendar,
  ImagesCalendar,
  CalendsrContainer,
} from "./DiaryDateCalendar.styled";
import calendarImg from "../../images/calendar/calendar.svg";

const DiaryDateСalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  // console.log(startDate.toLocaleDateString());
  return (
    <CalendsrContainer>
      <Calendar
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      ></Calendar>
      <ImagesCalendar src={calendarImg} alt="icon" />
    </CalendsrContainer>
  );
};

export default DiaryDateСalendar;
