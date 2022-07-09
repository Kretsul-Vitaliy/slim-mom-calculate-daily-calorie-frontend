import Container from '../../components/Container';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';
import { SignInHeader } from './LoginPage.styled';
import Section from '../../components/Section';

const LoginPage = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
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
