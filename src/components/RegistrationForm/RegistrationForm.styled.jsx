import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
const ContainerRegistration = styled.div`
  max-width: 285px;
  padding: 40px 0 100px 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding: 160px 0 140px 0;
    min-width: 768px;
    max-width: 1279px;
    text-align: start;
  }
  @media screen and (min-width: 1280px) {
    padding: 160px 0 180px 0;
    min-width: 1280px;
    max-width: 100%;
  }
`;
const TitleRegistration = styled.h1`
  color: var(--extra-color);
  text-transform: uppercase;
  font-family: Verdana-Bold;
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-family: GothamPro-Bold;
    line-height: 0.9;
  }
`;
const FormRegistration = styled.form`
  /* display: flex; */
  /* justify-content: center; */
  /* margin-left: auto; */
`;
const FormRegistrationList = styled.ul`
  margin: 60px 0;
  list-style: none;
  padding: 0;
`;
const FormRegistrationListItem = styled.li`
  margin-bottom: 0;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;
const FormRegistrationLabel = styled.label`
  display: flex;
  height: 15px;
  font-family: Verdana-Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: var(--text-secondary-color);
`;

const FormRegistrationInput = styled.input`
  border-bottom: 1px solid var(--header-divider-color);
  border-top: none;
  border-left: none;
  border-right: none;
  width: 285px;
  display: flex;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

const RegistrationEnterLink = styled(NavLink)`
  font-family: Verdana-Bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--extra-color);
  width: 182px;
  height: 44px;
  border-radius: 30px;
  border: 1px solid var(--extra-color);
  padding: 12px 50px;
  font-family: Verdana-Bold;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  &:hover,
  :focus {
    background: var(--extra-color);
    color: var(--color-white);
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
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
export {
  ContainerRegistration,
  TitleRegistration,
  FormRegistration,
  FormRegistrationList,
  FormRegistrationListItem,
  FormRegistrationLabel,
  FormRegistrationInput,
  RegistrationEnterLink,
  ButtonContainer,
  RegistrationButton,
};
