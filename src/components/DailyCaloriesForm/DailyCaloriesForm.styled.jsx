import styled from 'styled-components';

const Wrapper = styled.div`
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 32px;
  padding-bottom: 100px;
  @media only screen and (min-width: 769px) {
    width: 768px;
    padding-top: 100px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 400px;
  }
  @media only screen and (min-width: 1280px) {
    width: 1280px;
    padding-top: 91px;
    padding-left: 16px;
    padding-right: auto;
    padding-bottom: 214px;
  }
`;

const Title = styled.h2`
  font-family: Verdana-Bold;
  font-size: 18px;
  line-height: 1.4;
  color: ${props => props.theme.dailyCaloriFormTittleColor};

  margin-bottom: 32px;
  @media only screen and (min-width: 769px) {
    font-size: 34px;
    line-height: 1.2;
    margin-bottom: 68px;
  }
`;

const Input = styled.input`
  display: block;
  font-family: Verdana-Bold;
  width: 100%;
  /* padding-bottom: 8px; */
  font-size: 16px;
  color: ${props => props.theme.dailyCaloriFormInputColor};

  margin-bottom: 32px;
  border: none;
  border-bottom: 1px solid var(--header-divider-color);
  outline: none;
  background: transparent;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media only screen and (min-width: 769px) {
    /* padding-bottom: 20px; */
    margin-bottom: 40px;
  }
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: ${props => props.theme.dailyCaloriFormLabelColor};

  font-family: Verdana-Bold;
  line-height: 1.2;
  letter-spacing: 0.04em;
  font-size: 14px;
  ${Input}:focus ~ &,
  ${Input}:valid ~ & {
    top: -20px;
    left: 0;
    font-size: 14px;
    color: ${props => props.theme.dailyCaloriFormFocusHoverColor};
  }
`;
const RadioTitle = styled.div`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 1.2;
  font-family: Verdana-Bold;
  letter-spacing: 0.04em;
  color: ${props => props.theme.dailyCaloriFormRadioTitleColor};

  @media only screen and (min-width: 769px) {
    /* margin-bottom: 23px; */
  }
`;
const Line = styled.div`
  @media only screen and (min-width: 769px) {
    border-bottom: 1px solid var(--header-divider-color);
    margin-bottom: 8px;
  }
`;

const RadioGroup = styled.div`
  margin-bottom: 40px;
  margin-top: 8px;

  font-family: Verdana-Bold;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
`;

const RadioLabel = styled.label`
  margin-right: 24px;
  color: var(--text-secondary-color);
`;

const Container = styled.div`
  :focus {
    color: var(--extra-color);
  }
  @media only screen and (min-width: 769px) {
    display: flex;
    margin-bottom: 20px;
  }
`;

const Box = styled.div`
  margin-right: 32px;
`;
const InputBox = styled.div`
  position: relative;
`;
const RadioInput = styled.input`
  position: absolute;
  display: none;
  + ${RadioLabel} {
    position: relative;
    padding: 0 0 0 26px;
    cursor: pointer;

    font-family: Verdana;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;

    color: ${props => props.theme.dailyCaloriFormRadioInputColor};

    &::before {
      content: '';
      position: absolute;
      top: -3px;
      left: 0;
      width: 20px;
      height: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 50%;
      background: #fff;
    }
    &::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 6px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${props => props.theme.dailyCaloriFormBackgroundAfterColor};
      opacity: 0;
      transition: 0.2s;
    }
  }
  :checked + ${RadioLabel} {
    font-weight: 700;
    color: ${props => props.theme.dailyCaloriFormChekedColor};
    ::after {
      opacity: 1;
      background: ${props => props.theme.dailyCaloriFormBackgroundAfterColor};
    }
  }
`;
const ErrorsInput = styled.p`
  color: red;
  + ${Input} {
    border-bottom: 1px solid red;
  }
  ~ ${Label} {
    top: -20px;
    left: 0;
  }
`;

export {
  Wrapper,
  RadioInput,
  Title,
  Input,
  RadioLabel,
  RadioTitle,
  RadioGroup,
  Container,
  Box,
  InputBox,
  Label,
  Line,
  ErrorsInput,
};
