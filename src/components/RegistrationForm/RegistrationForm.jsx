import React from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
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
  MessageError,
} from './RegistrationForm.styled.jsx';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth';
import { AuthorizeGoogle } from '../../components';
import { useNavigate } from 'react-router-dom';
// const WrapperButtonRegister = () => {
//   return {};
// };

const RegistrationForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const notify = () => toast(t?.('auth.verifyMail'));

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, t?.('auth.verMin'))
        .max(254, t?.('auth.verMax'))
        .required(t?.('auth.verReq')),
      email: Yup.string()
        .email(t?.('auth.invMail'))
        .min(3, t?.('auth.verMin'))
        .max(35, t?.('auth.verMax'))
        .required(t?.('auth.verReq')),
      password: Yup.string()
        .min(8, t?.('auth.verMin'))
        .max(100, t?.('auth.verMax'))
        .required(t?.('auth.verReq')),
    }),
    onSubmit: values => {
      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      const isRegister = dispatch(register(payload));
      if (isRegister) {
        formik.resetForm();
        navigate('/login');
      } else {
        notify();
        return;
      }
    },
  });

  const { name, email, password } = formik.values;

  return (
    <ContainerRegistration>
      <TitleRegistration>{t?.('auth.register')}</TitleRegistration>
      <form onSubmit={formik.handleSubmit}>
        <FormRegistrationList>
          <FormRegistrationListItem>
            <FormRegistrationInput
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              pattern="^[A-Za-zА-Яа-яЁёІіЇїЄє' ]+$"
              value={name}
              autocomplete="off"
              required
            />
            {formik.touched.name && formik.errors.name ? (
              <MessageError>{formik.errors.name}</MessageError>
            ) : null}
            <FormRegistrationLabel htmlFor="name">
              {t?.('auth.name')} *
            </FormRegistrationLabel>
          </FormRegistrationListItem>
          <FormRegistrationListItem>
            <FormRegistrationInput
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              pattern="^[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+(?:\.[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+)*@([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]"
              password
              value={email}
              autocomplete="off"
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <MessageError>{formik.errors.email}</MessageError>
            ) : null}
            <FormRegistrationLabel htmlFor="email">
              Email *
            </FormRegistrationLabel>
          </FormRegistrationListItem>
          <FormRegistrationListItem>
            <FormRegistrationInput
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              pattern="(?=.*[0-9])(?=.*[a-z])[0-9a-zA-Z]{8,}"
              title="Password must be lowercase latin letters, numbers and without special characters. Minimum 8 characters."
              value={password}
              autocomplete="off"
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <MessageError>{formik.errors.password}</MessageError>
            ) : null}
            <FormRegistrationLabel htmlFor="password">
              {t?.('auth.password')} *
            </FormRegistrationLabel>
          </FormRegistrationListItem>
        </FormRegistrationList>
        <ButtonContainer>
          <RegistrationEnterLink to="/login">
            {t?.('auth.login')}
          </RegistrationEnterLink>
          <RegistrationButton
            type="submit"
            disabled={!name || !email || !password}
            size="short"
          >
            {t?.('auth.register')}
          </RegistrationButton>
          <AuthorizeGoogle />
        </ButtonContainer>
      </form>
    </ContainerRegistration>
  );
};
export default RegistrationForm;
