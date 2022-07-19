import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
`;

export const ModalSubmitButton = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }

  button {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
export const HelpingForm = styled.div`
  position: absolute;
  width: 500px;
  max-height: 250px;
  padding: 10px;
  border: 1px solid var(--text-secondary-color);
  border-radius: 15px;
  overflow: hidden;
  background-color: var(--page-secondary-color);
  z-index: 10;

  @media screen and (max-width: 768px) {
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }

  li {
    width: 95%;
    height: 30px;
    padding: 4px;
    cursor: pointer;
    transition: var(--transition);
    font-family: 'Verdana';
    font-weight: 400;
    font-size: 13px;
    line-height: 23px;
    letter-spacing: 0.04em;
    color: var(--text-secondary-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;

    &:hover {
      background-color: var(--header-divider-color);
      color: ${props => props.theme.liHoverColor};
      border-radius: 5px;
    }
  }
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
  background-color: inherit;
  background-clip: padding-box;
  border-radius: 0.25rem;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }

  &:nth-of-type(2) {
    width: 170px;

    @media screen and (max-width: 768px) {
      width: 80%;
      margin: 32px auto 60px auto;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
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
      color: ${props => props.theme.inputFocusColor};
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
    color: ${props => props.theme.inputColor};
    padding-bottom: 20px;

    @media screen and (max-width: 768px) {
      padding-bottom: 0;
      width: 100%;
    }

    &:focus {
      outline: 0;
      border-bottom: 2px solid ${props => props.theme.inputFocusColor};

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
  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;
