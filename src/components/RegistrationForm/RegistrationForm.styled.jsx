import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
const ContainerRegistration = styled.div`
  max-width: 285px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media screen and (min-width: 768px) {
    min-width: 768px;
    max-width: 1279px;
    text-align: start;
  }
  @media screen and (min-width: 1280px) {
    min-width: 1280px;
    max-width: 100%;
  }
`;
const TitleRegistration = styled.h1`
  color: ${props => props.theme.titleColor};
  text-transform: uppercase;
  font-family: GothamPro-Bold;
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    line-height: 0.9;
  }
`;
const FormRegistrationList = styled.ul`
  margin: 60px 0;
  list-style: none;
  padding: 0;
`;
const FormRegistrationListItem = styled.li`
  position: relative;
  margin-bottom: 0;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;
const FormRegistrationLabel = styled.label`
  display: flex;
  position: absolute;
  top: -15px;
  left: 0;
  height: 15px;
  font-family: Verdana-Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: ${props => props.theme.labelColor};
`;

const FormRegistrationInput = styled.input`
  color: ${props => props.theme.inputTextColor};
  border-bottom: 1px solid var(--header-divider-color);
  border-top: none;
  border-left: none;
  border-right: none;
  width: 285px;
  display: flex;
  height: 20px;
  outline: none;
  background: transparent;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media screen and (min-width: 768px) {
    width: 240px;
  }

  &:focus {
    border-bottom: 2px solid ${props => props.theme.titleColor};
  }
  &:focus ~ label {
    position: absolute;
    top: -20px;
    left: 0;
  }
`;

const MessageError = styled.div`
  color: ${props => props.theme.MessageErrorColor};
`;

const RegistrationEnterLink = styled(NavLink)`
  font-family: Verdana-Bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.btnTextColor};
  width: 182px;
  height: 44px;
  border-radius: 30px;
  border: 1px solid ${props => props.theme.btnBorderColor};
  background: ${props => props.theme.btnBackgroundColor};
  padding: 12px 50px;
  font-family: Verdana-Bold;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  &:hover,
  :focus {
    background: ${props => props.theme.btnFocusHoverBackgroundColor};
    color: ${props => props.theme.btnFocusHoverTextColor};
    box-shadow: 0px 4px 10px ${props => props.theme.boxShadowColor};
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 32px;
    margin-left: 0;
  }
`;
const ButtonContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const RegistrationButton = styled(Button)`
  font-family: Verdana-Bold;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    justify-content: start;
  }
`;

const GoogleButton = styled.div`
  /* margin-top: 20px; */
  margin-left: 50px;
  position: absolute;

  @media screen and (min-width: 768px) {
    margin-top: -44px;
    margin-left: 398px;
  }
`;

export {
  ContainerRegistration,
  TitleRegistration,
  FormRegistrationList,
  FormRegistrationListItem,
  FormRegistrationLabel,
  FormRegistrationInput,
  RegistrationEnterLink,
  ButtonContainer,
  RegistrationButton,
  MessageError,
  GoogleButton,
};
