import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { login } from '../../redux/auth';
import * as Yup from 'yup';
import Button from '../Button';
import {
  Labels,
  Input,
  InputBox,
  Form,
  ButtonsWrapper,
  StyledNavLink,
  ButtonText,
  MessageError,
} from './LoginForm.styled';

export default function LoginForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.auth.isLogged);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email(t?.('auth.invMail'))
      .min(3, t?.('auth.verMin'))
      .max(35, t?.('auth.verMax'))
      .required(t?.('auth.verReq')),
    password: Yup.string()
      .min(8, t?.('auth.verMin'))
      .max(35, t?.('auth.verMax'))
      .required(t?.('auth.verReq')),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    isSubmitting: false,

    onSubmit: async ({ email, password }) => {
      dispatch(login({ email, password }));
      isLogged ? formik.resetForm() : formik.isSubmitting(false);
    },
  });

  const { email, password } = formik.values;

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputBox name="email">
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={email}
          autoComplete="off"
          required
        />
        <Labels htmlFor="email">Email *</Labels>
        {formik.touched.email && formik.errors.email ? (
          <MessageError>{formik.errors.email}</MessageError>
        ) : null}
      </InputBox>

      <InputBox name="password">
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={password}
          autoComplete="off"
          required
        />
        <Labels htmlFor="password">{t?.('auth.password')} *</Labels>
        {formik.touched.password && formik.errors.password ? (
          <MessageError>{formik.errors.password}</MessageError>
        ) : null}
      </InputBox>

      <ButtonsWrapper>
        <Button type="submit" disabled={!email || !password} size="short">
          <ButtonText>{t?.('auth.login')}</ButtonText>
        </Button>

        <StyledNavLink to="/signup">{t?.('auth.register')}</StyledNavLink>
      </ButtonsWrapper>
    </Form>
  );
}
