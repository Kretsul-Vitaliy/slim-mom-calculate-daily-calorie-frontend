import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
const ContainerRegistration = styled.div`
  padding: 40px 0 100px 0;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    padding: 160px 0 140px 0;
    min-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    padding: 160px 0 180px 0;
    min-width: 1280px;
  }
`;
const TitleRegistration = styled.h2`
  color: var(--extra-color);
  text-transform: uppercase;
  font-family: GothamPro;
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.04em;
  margin-top: 0;
  text-align: center;
  @media screen and (min-width: 768px) {
    line-height: 0.9;
    text-align: start;
  }
`;
const FormRegistration = styled.form`
  /* display: block; */
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
  width: auto;
  height: 16px;
  font-family: Verdana;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: var(--text-secondary-color);
`;

const FormRegistrationInput = styled.input`
  border-bottom: 1px solid #e0e0e0;
  border-top: none;
  border-left: none;
  border-right: none;
  height: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

const RegistrationEnterLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: var(--color-white);
`;
const ButtonContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const RegistrationButton = styled(Button)`
  font-family: Verdana;
  margin-left: auto;
  margin-right: auto;
  &:not(:first-child) {
    margin-top: 20px;
  }
  &:hover,
  &:focus {
    border: 2px solid var(--extra-color);
    box-shadow: none;
    color: var(--extra-color);
    background: var(--color-white);
  }
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-left: 0;
    margin-right: 0;
    &:not(:first-child) {
      margin-left: 32px;
      margin-top: 0;
    }
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
