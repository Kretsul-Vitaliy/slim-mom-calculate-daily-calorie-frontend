import { Container, AuthorizeGoogle } from '../../components';
import { WrapperFooter, FormButton, StyledElement } from './Footer.styles';
import { SwitcherButton } from '../../theme/SwitcherButton.js';
const Footer = ({ switchTheme }) => {
  return (
    <WrapperFooter>
      <Container>
        <StyledElement>
          <FormButton type="submit" size="short">
            Our team
          </FormButton>
          <SwitcherButton switchTheme={switchTheme} />
          <AuthorizeGoogle />
        </StyledElement>
      </Container>
    </WrapperFooter>
  );
};

export default Footer;
