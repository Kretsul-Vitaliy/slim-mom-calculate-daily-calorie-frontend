import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth';
import { NavWrapper, List } from './Navigation.styled'
import {LoggedNavItems, UnloggedNavItems} from '../Navigation';

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
