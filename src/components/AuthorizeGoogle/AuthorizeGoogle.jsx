import { GoogleBtn, GoogleIcon } from './AuthorizeGoogle.styled';
import logo from '../../images/svg/google.svg';

const AuthorizeGoogle = () => {
  return (
    <>
      <div>
        <a href="https://slimcalculatebackend.herokuapp.com/api/v1/auth/google">
          <GoogleBtn>
            <GoogleIcon src={logo} alt="google" />
            Google
          </GoogleBtn>
        </a>
      </div>
    </>
  );
};

export default AuthorizeGoogle;
