import { useTranslation } from 'react-i18next';
import { LoginForm, Section } from '../../components';
import { SignInHeader } from './LoginPage.styled';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <SignInHeader>{t?.('auth.signInTitle')}</SignInHeader>
      <LoginForm />
    </Section>
  );
};

export default LoginPage;
