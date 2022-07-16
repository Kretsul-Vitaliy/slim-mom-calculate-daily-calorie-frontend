import { useTranslation } from 'react-i18next'
import { Item, StyledNavLink } from './Navigation.styled'


const UnloggedNavItems = () => {
    const { t } = useTranslation()
  
    return (
      <>
        <Item>
          <StyledNavLink to="/login">{t?.('nav.signIn')}</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to="/signup">{t?.('nav.registration')}</StyledNavLink>
        </Item>
      </>
    )
  }

export default UnloggedNavItems