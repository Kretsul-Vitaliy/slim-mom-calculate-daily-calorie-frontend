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
  /* display: flex; */
  /* justify-content: space-between;
  width: 122px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;

  color: #000000;
  background: #f6f7fb;
  border: none;
  border-radius: 26px; */

  /* cursor: pointer; */

  /* &:hover {
    background-color: #e7e8ec;
  }
  &:active {
    background-color: #e76615;
    box-shadow: 0 3px #d37134;
    transform: translateY(1px);
  } */
`;

export const GoogleIcon = styled.img`
  background-size: contain;
  display: inline-block;
  height: 18px;
  width: 18px;
`;
