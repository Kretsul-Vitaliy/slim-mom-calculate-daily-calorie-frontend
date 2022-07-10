import { useState } from 'react'
import Container from '../Container'
import desctop from "../../images/logo/logo-desctop.svg";
import tablet from "../../images/logo/logo-tablet.svg";
import mobile from "../../images/logo/logo-mobile.svg";
import { HeaderEl, HeaderContainer, Picture, Divider, NavList, Menu } from "./Header.styled";
import Navigation, { UnloggedNavItems } from "../Navigation"
import LanguageSelector from '../LanguageSelector';

const Header = () => {
  const [isOpen] = useState(false)

  return (
    <HeaderEl>
      <Container>
      <HeaderContainer>
          <div>
            <Picture>
              <source
                media="(max-width: 767px)"
                srcSet={mobile}
                width="47"
                height="44"
              />
              <source
                media="(min-width: 768px) and (max-width: 1279px)"
                srcSet={tablet}
              />
              <source
                media="(min-width: 1280px)"
                srcSet={desctop}
                width="167"
                height="66"
              />
              <img src={mobile} alt="Логотип" />
            </Picture>
          </div>

          <Divider />

          <Menu>            
            <Navigation isOpen={isOpen} />

            <NavList>
              <UnloggedNavItems />
            </NavList>
            
            <LanguageSelector />
          </Menu>
          
        </HeaderContainer>
      </Container>
    </HeaderEl>
  );
};

export default Header;
