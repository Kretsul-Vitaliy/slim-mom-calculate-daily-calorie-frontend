import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Picture = styled.picture`
  img {
    padding: 20px 0 16px 20px;
    @media screen and (max-width: 767px) {
      width: 47px;
      height: 44px;
      padding: 0;
      transform: translate(0, 40%);
    }
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 162px;
    }
    @media screen and (min-width: 1280px) {
      width: 167px;
      height: 66px;
      padding: unset;
    }
  }
`;

const LinkPicture = styled(NavLink)`
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
  padding: 0;
  border-radius: 35px;
  @media screen and (min-width: 768px) {
    padding: 0 10px;
    border-radius: 35px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 10px;
    border-radius: 35px;
  }
`;

export { Picture, LinkPicture };
