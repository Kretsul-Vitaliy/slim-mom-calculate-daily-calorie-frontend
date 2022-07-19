import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginForm, Section, Loader } from '../../components';
import { getLoading } from '../../redux/auth';
import { SignInHeader } from './LoginPage.styled';

const LoginPage = props => {
  const { t } = useTranslation();
  const isLoading = useSelector(getLoading);

  return (
    <Section>
      {isLoading ? (
        <Loader theme={props} />
      ) : (
        <>
          <SignInHeader>{t?.('auth.signInTitle')}</SignInHeader>
          <LoginForm />
        </>
      )}
    </Section>
  );
};

export default LoginPage;
