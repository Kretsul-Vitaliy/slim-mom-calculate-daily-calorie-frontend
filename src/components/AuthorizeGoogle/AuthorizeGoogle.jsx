import {
  NavlinkInfoStyled,
  GoogleBtn,
  GoogleIcon,
} from './AuthorizeGoogle.styled';
import logo from '../../images/svg/google.svg';

const AuthorizeGoogle = () => {
  return (
    <>
      <div>
        <NavlinkInfoStyled to="/auth/google" exact="true">
          <GoogleBtn>
            <GoogleIcon src={logo} alt="google" />
            Google
          </GoogleBtn>
        </NavlinkInfoStyled>
      </div>
    </>
  );
};

export default AuthorizeGoogle;
