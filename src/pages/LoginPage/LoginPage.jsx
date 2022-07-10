import Container from '../../components/Container';
import LoginForm from '../../components/LoginForm';
import { SignInHeader } from './LoginPage.styled';
import Section from '../../components/Section';

const LoginPage = () => {
  return (
    <>
      <Section>
        <Container>
          <SignInHeader>Sign in</SignInHeader>
          <LoginForm />
        </Container>
      </Section>
    </>
  );
};

export default LoginPage;
