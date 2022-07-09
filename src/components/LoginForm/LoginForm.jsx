import { useFormik } from 'formik';
import Button from '../Button';
import { Labels, Input, Form, ButtonsWrapper } from './LoginForm.styled';

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Labels htmlFor="email">Email *</Labels>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <Labels htmlFor="password">Password *</Labels>
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <ButtonsWrapper>
        <Button type="submit" active size="short">
          Log in
        </Button>
        <Button type="button" size="short">
          Register
        </Button>
      </ButtonsWrapper>
    </Form>
  );
}
