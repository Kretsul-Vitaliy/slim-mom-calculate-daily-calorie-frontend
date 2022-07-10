import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
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
} from "./RegistrationForm.styled.jsx";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperation";
const RegistrationForm = () => {
  const dispatch = useDispatch();
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
      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      dispatch(register(payload));
      formik.resetForm();
      console.log(values);
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
          <RegistrationButton type="button" active size="short">
            <RegistrationEnterLink to="/login"></RegistrationEnterLink>Login
          </RegistrationButton>
          <RegistrationButton type="submit" active size="short">
            Register
          </RegistrationButton>
        </ButtonContainer>
      </FormRegistration>
    </ContainerRegistration>
  );
};
export default RegistrationForm;
