import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 32px;
  padding-bottom: 100px;
  margin: 0 auto;
  @media only screen and (min-width: 769px) {
    min-width: 768 px;
    padding-top: 100px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 400px;
  }
  @media only screen and (min-width: 1280px) {
    min-width: 1280px;
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
  color: #212121;
  margin-bottom: 32px;
  @media only screen and (min-width: 769px) {
    font-size: 34px;
    line-height: 1.2;
    margin-bottom: 68px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 0;
  font-size: 16px;
  color: rgb(0, 0, 0);
  margin-bottom: 32px;
  border: none;
  border-bottom: 1px solid var(--header-divider-color);
  outline: none;
  background: transparent;

  @media only screen and (min-width: 769px) {
    margin-bottom: 40px;
  }
`;
const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px 0;
  color: var(--text-secondary-color);
  font-family: Verdana-Bold;
  line-height: 1.2;
  letter-spacing: 0.04em;
  font-size: 14px;
  ${Input}:focus ~& {
    top: -20px;
    left: 0;
    font-size: 14px;
    color: var(--extra-color);
  }
`;
const RadioTitle = styled.div`
  display: block;
  font-size: 14px;
  line-height: 1.2;
  font-family: Verdana-Bold;
  margin-bottom: 8px;

  letter-spacing: 0.04em;

  color: var(--text-secondary-color);
`;

const RadioGroup = styled.div`
  display: block;
  margin-bottom: 40px;

  font-family: Verdana-Bold;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
`;

const RadioLabel = styled.label`
  margin-right: 24px;
  color: var(--text-secondary-color);
`;

const RadioInput = styled.input``;

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
};
