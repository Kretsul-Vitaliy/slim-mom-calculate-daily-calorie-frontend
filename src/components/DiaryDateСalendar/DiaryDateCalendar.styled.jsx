import styled from "styled-components";
import DatePicker from "react-datepicker";

export const CalendsrContainer = styled.div`
  position: relative;
`;

export const Calendar = styled(DatePicker)`
  border: none;
  width: 250px;
  outline: none;
  font-family: "Verdana";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: #212121;
  cursor: pointer;
`;

export const ImagesCalendar = styled.img`
  position: absolute;
  top: 16px;
  left: 220px;
  z-index: 1;
  pointer-events: none;
`;
