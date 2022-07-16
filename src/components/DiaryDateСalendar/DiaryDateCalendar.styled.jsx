import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const CalendsrContainer = styled.div`
  position: relative;
  margin: 100px 0 40px 0;
  @media screen and (max-width: 400px) {
    width: 116px;
    margin: 40px 0 32px 0;
  }
`;

export const Calendar = styled(DatePicker)`
  border: none;
  width: 250px;
  outline: none;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: #212121;
  cursor: pointer;
  background-color: inherit;

  @media screen and (max-width: 400px) {
    width: 116px;
    font-size: 18px;
  }
`;

export const ImagesCalendar = styled.img`
  position: absolute;
  top: 16px;
  left: 220px;
  z-index: 1;
  pointer-events: none;
  @media screen and (max-width: 400px) {
    top: 10px;
    left: 125px;
  }
`;
