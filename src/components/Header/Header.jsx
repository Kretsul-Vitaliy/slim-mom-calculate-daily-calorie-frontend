import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Outlet } from 'react-router-dom';

import { getIsAuthenticated } from '../../redux/auth/authSelector';

import Container from '../Container';
import Logo from '../Logo'
import {
  HeaderEl,
  HeaderContainer,
  Divider,
  NavList,
  Menu,
  BurgerButton,
  UserInfoWrapper,
} from './Header.styled';
import Navigation, { UnloggedNavItems } from '../Navigation';
import UserInfo from '../UserInfo'
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
    <>
      <HeaderEl>
        <Container>
          <HeaderContainer>
            <Logo />

            <Divider />

            <Menu>
              {isLogged && 
              <UserInfoWrapper>
                <UserInfo />
              </UserInfoWrapper>
              }
              <Navigation isOpen={isOpen} isLogged />

              {isLogged ? (
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
      <Outlet />
    </>
  );
};

export default Header;
