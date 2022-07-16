import { useTranslation } from 'react-i18next';
import {useSelector} from "react-redux";
import {Container,LoginForm,Section,Loader} from '../../components';

import { SignInHeader } from './LoginPage.styled';
import { getLoading } from '../../redux/auth/authSelector';

const LoginPage = () => {
  const { t } = useTranslation();
  const isLoading = useSelector(getLoading);

  return (
 
      <Section>
        <Container>
          {isLoading?<Loader/>:<>
          <SignInHeader>{t?.("auth.signInTitle")}</SignInHeader>
          <LoginForm />
          </>}
          
        </Container>
      </Section>
   
  );
};

export default LoginPage;
