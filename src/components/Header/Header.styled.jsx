import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  @media screen and (max-width: 1280px) {
    border-bottom: 2px solid #e0e0e0;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    justify-content: flex-start;
  }
  ul {
    display: flex;
    gap: 16px;
    list-style: none;
    padding: 0 20px 0 20px;
  }
  picture {
    img {
      padding: 20px 0 16px 20px;
      @media screen and (max-width: 768px) {
        width: 47px;
        height: 44px;
        padding: 0;
      }
      @media screen and (min-width: 768px) and (max-width: 1280px) {
        width: 162px;
      }
      @media screen and (min-width: 1280px) {
        width: 167px;
        height: 66px;
        padding-top: 0px;
      }
    }
  }

  a {
    font-weight: 700;
    font-size: 14px;
    line-height: 50px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-decoration: none;
    color: #9b9faa;
    padding: 8px 0 8px 0;
    transition: color 250ms linear;

    &:hover {
      color: #212121;
    }

    @media screen and (min-width: 1280px) {
      line-height: 80px;
    }
  }
`;

export const Link = styled.a`
  @media screen and (min-width: 1280px) {
    &:nth-child(odd) {
      border-left: 2px solid #e0e0e0;
      padding-left: 20px;
    }
  }
`;
