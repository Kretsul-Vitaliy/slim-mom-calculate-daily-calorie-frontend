import styled from 'styled-components';
import '../../helpers/variables.css';

export const SignInHeader = styled.h1`
  font-family: GothamPro-Bold;
  font-size: 14px;
  line-height: 0.93;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.titleColor};

  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;
