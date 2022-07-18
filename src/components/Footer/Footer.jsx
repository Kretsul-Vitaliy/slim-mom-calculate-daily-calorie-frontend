import { Container, AuthorizeGoogle } from '../../components';
import { WrapperFooter, FormButton } from './Footer.styles';
const Footer = () => {
  return (
    <WrapperFooter>
      <Container>
        <FormButton type="submit" size="short">
          Our team
        </FormButton>
        <AuthorizeGoogle />
      </Container>
    </WrapperFooter>
  );
};

export default Footer;
