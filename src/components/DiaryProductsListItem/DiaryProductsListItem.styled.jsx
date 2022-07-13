import styled from 'styled-components';

export const ProductsList = styled.ul`
  li {
    display: flex;
    height: 45px;

    p {
      font-family: 'Verdana';
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.04em;
      color: var(--text-main-color);
    }

    p:nth-of-type(1) {
      width: 240px;
      margin-right: 48px;
      border-bottom: 1px solid var(--header-divider-color);
    }
    p:nth-of-type(2) {
      width: 108px;
      margin-right: 32px;
      border-bottom: 1px solid var(--header-divider-color);
      text-align: right;
      line-height: 42px;
    }
    p:nth-of-type(3) {
      width: 108px;
      margin-right: 32px;
      border-bottom: 1px solid var(--header-divider-color);
      text-align: right;
      line-height: 42px;
    }
    button {
      border: none;
      background-color: inherit;
      cursor: pointer;
    }
  }
`;

export const CloserMessage = styled.p`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 17px;
  letter-spacing: 0.04em;
  height: 50px;
  color: var(--extra-color);
  border-bottom: 1px solid var(--header-divider-color);
`;
