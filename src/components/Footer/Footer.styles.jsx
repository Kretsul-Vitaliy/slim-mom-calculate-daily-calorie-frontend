import styled from 'styled-components';
import Button from '../Button';

const WrapperFooter = styled.div`
  position: relative;
  border-top: 2px solid ${props => props.theme.headerElborderBottomColor};
  @media screen and (max-width: 1279px) {
    padding: 20px 30px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 40px;
    padding-bottom: 40px;
    z-index: 3;
  }
`;

const FormButton = styled(Button)`
  z-index: 5;
  margin-right: 5px;

  @media screen and (max-width: 500px) {
    margin-bottom: 30px;
  }
`;

const StyledElement = styled.div`
  margin: auto;
  position: relative;
  text-align: center;

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
  }
`;

export { WrapperFooter, FormButton, StyledElement };
