import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
// import background4 from "../../images/bg-pictures/desktop/background4.jpg";

const ContainerRegistration = styled.div`
  padding: 40px 20px 100px 20px;
  margin-left: auto;
  margin-right: auto;
  /* min-width: 320px; */
  background-image: url("../../images/bg-pictures/desktop/background4.jpg");
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: 768px) {
    padding: 160px 32px 140px 32px;
    min-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    padding: 160px 16px 180px 16px;
    min-width: 1280px;
  }
`;
const TitleRegistration = styled.h2`
  color: rgba(252, 132, 45, 1);
  text-transform: uppercase;
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
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: #9b9faa;
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
  color: white;
`;
const ButtonContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const RegistrationButton = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 180px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border-color: rgba(117, 190, 218, 0);
  padding: 13px 50px;
  color: white;
  &:hover,
  &:focus {
    border: 2px solid #fc842d;
    box-shadow: none;
    color: #fc842d;
    background: white;
  }
  @media screen and (min-width: 768px) {
    margin-left: 0;
    flex-wrap: nowrap;
    margin-left: 0;
    margin-right: 0;
    &:not(:first-child) {
      margin-left: 32px;
    }
  }
`;
const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(15, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "Too Short!")
        .max(12, "Too Long!")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <ContainerRegistration>
      <TitleRegistration>Register</TitleRegistration>
      <FormRegistration onSubmit={formik.handleSubmit}>
        <FormRegistrationList>
          <FormRegistrationListItem>
            <FormRegistrationLabel htmlFor="name">Name *</FormRegistrationLabel>
            <FormRegistrationInput
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </FormRegistrationListItem>
          <FormRegistrationListItem>
            <FormRegistrationLabel htmlFor="email">
              Email *
            </FormRegistrationLabel>
            <FormRegistrationInput
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              password
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </FormRegistrationListItem>
          <FormRegistrationListItem>
            <FormRegistrationLabel htmlFor="password">
              Password *
            </FormRegistrationLabel>
            <FormRegistrationInput
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </FormRegistrationListItem>
        </FormRegistrationList>
        <ButtonContainer>
          <RegistrationButton type="submit">
            <RegistrationEnterLink to="/LoginPage"></RegistrationEnterLink>Enter
          </RegistrationButton>
          <RegistrationButton type="submit">Register</RegistrationButton>
        </ButtonContainer>
      </FormRegistration>
      {/* <picture> */}
      {/* <img
        // media="(min-width:1280px)"
        // type="image/png"
        // srcset="../../images/bg-pictures/desktop/background4.jpg 1x"
        src="../../images/bg-pictures/desktop/background4.jpg"
        alt="Background photo"
      />
      {/* <img
        media="(min-width:768px)"
        type="image/png"
        srcset="../images/bg-pictures/tablet/banana.png"
      /> */}
      {/* <img src="banana.png" alt="Background photo" style="width:auto;" /> */}
      {/* </picture> */}
    </ContainerRegistration>
  );
};
export default RegistrationForm;
