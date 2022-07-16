import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next'
import { login } from '../../redux/auth/authOperation';
import * as yup from 'yup';

import Button from '../Button';

import {
  Labels,
  Input,
  Form,
  ButtonsWrapper,
  StyledNavLink,
  ButtonText,
} from './LoginForm.styled';

export default function LoginForm() {
  const isLoading = useSelector(state => state.auth.isLoading);
  console.log(isLoading);

  const { t } = useTranslation()

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(6, t?.("auth.verMin")).required(),
    }),
    onSubmit: ({ email, password }) => {
      dispatch(login({ email, password }));

      formik.resetForm();
    },
  });

  const { email, password } = formik.values;

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Labels htmlFor="email">Email *</Labels>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={email}
        autoComplete="off"
        required
      />

      <Labels htmlFor="password">{t?.('auth.password')} *</Labels>
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={password}
        autoComplete="off"
        required
      />
      <ButtonsWrapper>
        <Button type="submit" disabled={!email || !password} size="short">
          <ButtonText>Log in</ButtonText>
        </Button>
       
          <StyledNavLink to="/signup">
            Register
          </StyledNavLink>
        
      </ButtonsWrapper>
    </Form>
  );
}
