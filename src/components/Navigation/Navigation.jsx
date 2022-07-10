import { useSelector } from 'react-redux';

import { getIsAuthenticated } from '../../redux/auth/authSelector';

import { NavWrapper, List } from './Navigation.styled'

import LoggedNavItems from './LoggedNavItems'
import UnloggedNavItems from './UnloggedNavItems'


const Navigation = ({isOpen}) => {

  const isLogged = useSelector(getIsAuthenticated);

  return (
    <NavWrapper className={isOpen ? "menu-open" : ""}>
      <List>
        {isLogged
              ?
              <LoggedNavItems />
              :
              <UnloggedNavItems />
          }
      </List>
    </NavWrapper>
  );
};




export default Navigation;
