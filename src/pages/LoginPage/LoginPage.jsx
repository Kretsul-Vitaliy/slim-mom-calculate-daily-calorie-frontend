import Container from '../../components/Container';
import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Container>
        <h3>LoginPage</h3>
        <div>
          <Header />
          <LoginForm />
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
