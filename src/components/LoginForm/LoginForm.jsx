import { useFormik } from 'formik';

import Button from '../Button';
import {
  Labels,
  Input,
  Form,
  ButtonsWrapper,
  StyledNavLink,
} from './LoginForm.styled';

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
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
          Log in
        </Button>
        <Button type="button" size="short">
          <StyledNavLink to="/signup">Register</StyledNavLink>
        </Button>
      </ButtonsWrapper>
    </Form>
  );
}
