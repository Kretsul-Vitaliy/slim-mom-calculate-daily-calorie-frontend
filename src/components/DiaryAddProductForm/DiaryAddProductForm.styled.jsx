import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
`;

export const ProductInput = styled.div`
  position: relative;
  display: block;
  font-family: inherit;
  padding: 5px;
  width: 280px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.25rem;

  &:nth-of-type(2) {
    width: 170px;
  }

  div {
    position: absolute;
    width: auto;
    height: auto;
    top: 50px;

    p {
      font-family: 'Verdana';
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: 0.04em;
      color: var(--extra-color);
    }
  }

  input {
    border: none;
    border-bottom: 1px solid var(--header-divider-color);
    border-radius: 0;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    height: 40px;
    line-height: 1.25;
    background-color: inherit;
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: var(--text-secondary-color);
    padding-bottom: 20px;

    &:focus {
      outline: 0;
      border-bottom: 2px solid var(--extra-color);
      box-shadow: none;
    }
  }
`;

export const ProductsInput = styled.input`
  width: 240px;
`;

export const GramsInput = styled.input`
  width: 107px;
  text-align: right;
`;
