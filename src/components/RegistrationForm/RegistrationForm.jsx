import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ContainerRegistration,
  TitleRegistration,
  FormRegistrationList,
  FormRegistrationListItem,
  FormRegistrationLabel,
  FormRegistrationInput,
  RegistrationEnterLink,
  ButtonContainer,
  RegistrationButton,
} from './RegistrationForm.styled.jsx';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperation';
const RegistrationForm = () => {
  const notify = () =>
    toast('Please, check your email and confirm your account!');

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .min(6, 'Too Short!')
        .max(12, 'Too Long!')
        .required('Required'),
    }),
    onSubmit: values => {
      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      dispatch(register(payload));
      notify();
      formik.resetForm();
    },
  });

  const { name, email, password } = formik.values;

  return (
    <ContainerRegistration>
      <TitleRegistration>Register</TitleRegistration>
      <form onSubmit={formik.handleSubmit}>
        <FormRegistrationList>
          <FormRegistrationListItem>
            <FormRegistrationLabel htmlFor="name">Name *</FormRegistrationLabel>
            <FormRegistrationInput
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={name}
              autocomplete="off"
              required
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
              value={email}
              autocomplete="off"
              required
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
              value={password}
              autocomplete="off"
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </FormRegistrationListItem>
        </FormRegistrationList>
        <ButtonContainer>
          <RegistrationEnterLink to="/login">Log in</RegistrationEnterLink>
          <RegistrationButton
            type="submit"
            disabled={!name || !email || !password}
            size="short"
          >
            Register
          </RegistrationButton>
        </ButtonContainer>
      </form>
    </ContainerRegistration>
  );
};
export default RegistrationForm;
