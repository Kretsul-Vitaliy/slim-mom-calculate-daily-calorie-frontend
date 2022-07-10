import { useTranslation } from 'react-i18next'
import { Item, StyledNavLink } from './Navigation.styled'


const LoggedNavItems = () => {
    const { t } = useTranslation()
  
    return (
      <>
        <Item>
          <StyledNavLink to="/diary">{t?.('nav.diary')}</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to="/calculator">{t?.('nav.calculator')}</StyledNavLink>
        </Item>
      </>
    )
  }

export default LoggedNavItems