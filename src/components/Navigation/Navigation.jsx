import { useTranslation } from 'react-i18next'

import { List, Item, StyledNavLink } from './Navigation.styled'


const Navigation = () => {
  const { t } = useTranslation()

  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to="/diary">{t?.('nav.diary')}</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to="/calculator">{t?.('nav.calculator')}</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};

export default Navigation;
