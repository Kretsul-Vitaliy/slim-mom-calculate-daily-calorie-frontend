import { GoogleBtn, GoogleIcon } from './AuthorizeGoogle.styled';
import logo from '../../images/svg/google.svg';

const AuthorizeGoogle = () => {
  return (
    <>
      <div>
        {/* <a href="http://localhost:5000/api/v1/auth/google">LOCALHOST</a> */}
        <a href="https://slimcalculatebackend.herokuapp.com/api/v1/auth/google">
          <GoogleBtn size="short">
            <GoogleIcon src={logo} alt="google" />
            <span>Google</span>
          </GoogleBtn>
        </a>
      </div>
    </>
  );
};

export default AuthorizeGoogle;
