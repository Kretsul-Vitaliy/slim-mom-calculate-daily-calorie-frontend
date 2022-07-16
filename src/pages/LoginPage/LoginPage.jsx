import { useTranslation } from 'react-i18next';
import Container from '../../components/Container';
import LoginForm from '../../components/LoginForm';
import { SignInHeader } from './LoginPage.styled';
import Section from '../../components/Section';

const LoginPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Section>
        <Container>
          <SignInHeader>{t?.("auth.signInTitle")}</SignInHeader>
          <LoginForm />
        </Container>
      </Section>
    </>
  );
};

export default LoginPage;
