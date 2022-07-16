import styled from 'styled-components';
import sun from '../images/switcher-theme/sun.webp';
import moon from '../images/switcher-theme/moon.webp';

export const SwitcherButtonStyles = styled.button`
  display: flex;
  z-index: 25;
  position: absolute;
  margin-top: 20px;
  margin-left: 50%;
  border-radius: 30px;
  width: 95px;
  height: 52px;
  border: 1px solid ${props => props.theme.btnBorderColor};
  background: ${props => props.theme.btnSwitcherBackgroundColor};
  padding: 5px;
  justify-content: flex-start;
  &:hover {
    box-shadow: 0px 4px 10px ${props => props.theme.boxShadowColor};
  }
`;
export const SpanImg = styled.div`
  justify-content: flex-start;
  background-image: url(${sun});
  border-radius: 50%;
  background-size: 80%;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  transition: opacity 1000ms linear;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const SpanImgDark = styled.div`
  margin-left: auto;
  background-image: url(${moon});
  border-radius: 50%;
  background-size: 80%;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  transition: opacity 1000ms linear;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
