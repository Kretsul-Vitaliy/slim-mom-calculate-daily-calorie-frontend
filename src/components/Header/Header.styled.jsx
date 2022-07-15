import styled from 'styled-components';

const HeaderEl = styled.header`
  position: relative;
  @media screen and (max-width: 1279px) {
    border-bottom: 2px solid #e0e0e0;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 80px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
  }
`;
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

const Link = styled.a`
  @media screen and (min-width: 1280px) {
    &:nth-child(odd) {
      border-left: 2px solid #e0e0e0;
      padding-left: 20px;
    }
  }
`;

const Divider = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    width: 2px;
    height: 32px;
    background-color: var(--header-divider-color);
    margin: 0 20px;
    align-self: flex-end;
    transform: translate(-50%, -20%);
  }
`;

const NavList = styled.ul`
  display: flex;
  align-self: center;
  transform: translate(0, 10%);
  li {
    &:not(:last-child) {
      margin-right: 16px;
    }
    a {
      font-family: 'Verdana';
      font-weight: 700;
      font-size: 14px;
      line-height: 13px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--text-secondary-color);
      @media screen and (max-width: 420px) {
        font-size: 10px;
      }
    }

    .active {
      color: black;
    }
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
const Menu = styled.div`
  display: flex;
`;

const BurgerButton = styled.button`
  border: none;
  background: transparent;
  align-self: center;
  cursor: pointer;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    transform: translate(0, 10%);
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export {
  HeaderEl,
  HeaderContainer,
  Picture,
  Link,
  Divider,
  NavList,
  Menu,
  BurgerButton,
};
