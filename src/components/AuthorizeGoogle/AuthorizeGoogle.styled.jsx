import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

export const InfoText = styled.p`
  font-weight: 500;
  font-size: 1em;
  color: black;
`;
export const NavlinkInfoStyled = styled(NavLink)`
  font-size: 16px;
  color: black;

  &.active {
    color: green;
    font-size: 18px;
  }
`;

export const GoogleBtn = styled(Button)`
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: 32px;
  }
`;
export const GoogleIcon = styled.img`
  background-size: contain;
  display: inline-block;
  height: 18px;
  width: 18px;
`;
