import styled from 'styled-components';
import Button from '../Button';

const WrapperFooter = styled.div`
  position: relative;
  border-top: 2px solid ${props => props.theme.headerElborderBottomColor};
  @media screen and (max-width: 1279px) {
    border-bottom: 2px solid ${props => props.theme.headerElborderBottomColor};
  }
  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    z-index: 3;
  }
`;

const FormButton = styled(Button)`
  z-index: 5;
  margin-bottom: 30px;
`;
export { WrapperFooter, FormButton };
