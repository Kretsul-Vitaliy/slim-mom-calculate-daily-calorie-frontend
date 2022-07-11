import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperation';

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
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

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
        required
      />

      <Labels htmlFor="password">Password *</Labels>
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={password}
        required
      />
      <ButtonsWrapper>
        <Button type="submit" disabled={!email || !password} size="short">
          <ButtonText>Log in</ButtonText>
        </Button>
        <Button type="button" size="short">
          <StyledNavLink to="/signup">
            <ButtonText>Register</ButtonText>
          </StyledNavLink>
        </Button>
      </ButtonsWrapper>
    </Form>
  );
}
