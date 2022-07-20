import { useTranslation } from 'react-i18next';
import { LoginForm, Section, Container } from '../../components';
import { SignInHeader } from './LoginPage.styled';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <SignInHeader>{t?.('auth.signInTitle')}</SignInHeader>
        <LoginForm />
      </Container>
    </Section>
  );
};

export default LoginPage;
