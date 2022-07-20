import { Container } from '../../components';
import { WrapperFooter, FormButton, StyledElement } from './Footer.styles';
import { SwitcherButton } from '../../theme/SwitcherButton.js';
import ModalTeam from '../../components/ModalTeam';
import useModal from '../../hooks/useModal';
import Team from '../Team';

const Footer = ({ switchTheme }) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <WrapperFooter>
        <Container>
          <StyledElement>
            <FormButton type="submit" size="short" onClick={toggle}>
              Our team
            </FormButton>
            <SwitcherButton switchTheme={switchTheme} />
            {/* <AuthorizeGoogle /> */}
          </StyledElement>
        </Container>
      </WrapperFooter>
      <ModalTeam isShowing={isShowing} hide={toggle}>
        <Team isShowing={isShowing} hide={toggle} />
      </ModalTeam>
    </>
  );
};
export default Footer;
