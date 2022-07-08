import Container from "../../components/Container";
import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import { SignInHeader } from "./StyledLoginPage";

const LoginPage = () => {
  return (
    <>
      <Container>
        <Header />
        <SignInHeader>Sign in</SignInHeader>
        <LoginForm />
      </Container>
    </>
  );
};

export default LoginPage;
