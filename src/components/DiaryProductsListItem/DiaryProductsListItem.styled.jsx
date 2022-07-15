import styled from 'styled-components';

export const ProductsList = styled.ul`
  -webkit-mask-image: -webkit-linear-gradient(
    radial-gradient(
      linear-gradient,
      rgba(42, 68, 255, 0) 0%,
      rgba(255, 255, 255, 1) 40%
    )
  );
  mask-image: rgb(42, 68, 255);
  mask-image: linear-gradient(
    0deg,
    rgba(42, 68, 255, 0) 0%,
    rgba(255, 255, 255, 1) 40%
  );
  height: 280px;

  div {
    max-height: 260px !important;
  }

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

      svg {
        transition: var(--transition);
      }

      svg:hover {
        transform: scale(1.3);
      }
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
