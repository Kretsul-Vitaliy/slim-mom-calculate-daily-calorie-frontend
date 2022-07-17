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

  ${props => {
    if (props.margin === 'empty') {
      return 'height:auto;';
    }
  }};

  div {
    max-height: 260px !important;
  }

  li {
    display: flex;
    height: 45px;
    color: ${props => props.theme.ioMdCloseColor};

    p {
      font-family: 'Verdana';
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.04em;
      color: ${props => props.theme.liPCloseColor};

      @media screen and (max-width: 600px) {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre;
        line-height: 42px;
      }
    }

    p:nth-of-type(1) {
      width: 240px;
      margin-right: 48px;
      border-bottom: 1px solid var(--header-divider-color);

      @media screen and (max-width: 500px) {
        margin-right: auto;
      }
      @media screen and (max-width: 500px) {
        width: 130px;
      }
    }
    p:nth-of-type(2) {
      width: 108px;
      margin-right: 32px;
      border-bottom: 1px solid var(--header-divider-color);
      text-align: right;
      line-height: 42px;
      @media screen and (max-width: 500px) {
        margin-right: auto;
      }
      @media screen and (max-width: 500px) {
        width: 49px;
      }
    }
    p:nth-of-type(3) {
      width: 108px;
      margin-right: 32px;
      border-bottom: 1px solid var(--header-divider-color);
      text-align: right;
      line-height: 42px;
      @media screen and (max-width: 500px) {
        margin-right: auto;
      }
      @media screen and (max-width: 500px) {
        width: 58px;
      }
    }
    button {
      border: none;
      background-color: inherit;
      cursor: pointer;

      svg {
        transition: var(--transition);

        &:hover {
          transform: scale(1.3);
        }
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
