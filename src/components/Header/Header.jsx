import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import { getIsAuthenticated } from '../../redux/auth/authSelector';

import Container from '../Container';
import desctop from '../../images/logo/logo-desctop.svg';
import tablet from '../../images/logo/logo-tablet.svg';
import mobile from '../../images/logo/logo-mobile.svg';
import {
  HeaderEl,
  HeaderContainer,
  Picture,
  Divider,
  NavList,
  Menu,
  BurgerButton,
} from './Header.styled';
import Navigation, { UnloggedNavItems } from '../Navigation';
import LanguageSelector from '../LanguageSelector';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isLogged = useSelector(getIsAuthenticated);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <HeaderEl>
      <Container>
        <HeaderContainer>
          <Link to="/diary">
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
          </Link>

          <Divider />

          <Menu>
            <Navigation isOpen={isOpen} />

            {!isLogged ? (
              <BurgerButton onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <GrClose /> : <GiHamburgerMenu />}
              </BurgerButton>
            ) : (
              <NavList>
                <UnloggedNavItems />
              </NavList>
            )}

            <LanguageSelector />
          </Menu>
        </HeaderContainer>
      </Container>
    </HeaderEl>
  );
};

export default Header;
