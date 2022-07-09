import Container from "../../components/Container";
import Header from "../../components/Header";
import RegistrationForm from "../../components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <>
      <Container>
        <div>
          {/* <h2>RegistrationPage</h2> */}
          <Header />
          <RegistrationForm />
        </div>
      </Container>
    </>
  );
};

export default RegistrationPage;
