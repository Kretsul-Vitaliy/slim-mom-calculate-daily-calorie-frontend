const darckThemeBodyColor = 'rgb(0,0,0, 0.9)';
const darckThemeTextColor = '#1ee41e';
const darckboxShadowColor = '#49df49fa';

export const darkTheme = {
  body: `${darckThemeBodyColor}`,
  // Colors for registration and login forms
  titleColor: `${darckThemeTextColor}`,
  labelColor: `${darckThemeTextColor}`,
  inputTextColor: `${darckThemeTextColor}`,
  btnTextColor: `${darckThemeTextColor}`,
  btnBorderColor: `${darckThemeTextColor}`,
  btnBackgroundColor: `${darckThemeBodyColor}`,
  btnFocusHoverBackgroundColor: `${darckThemeBodyColor}`,
  btnFocusHoverTextColor: `${darckThemeTextColor}`,
  boxShadowColor: `${darckboxShadowColor}`,

  // Colors for header
  headerElborderBottomColor: 'var(--text-secondary-color)',

  // Colors for logo
  logoFill: 'var(--color-white)', // добавлять два спрайта, дневной и ночной пропсом
  // fill="#ffffff"

  // Colors for navigations
  NavLinkColor: `${darckThemeTextColor}`, //Only for desktop
  NavLinkHoverColor: 'var(--color-white)', //Only for desktop
};

export const lightTheme = {
  body: '#fff',
  // Colors for registration and login forms
  titleColor: 'var(--extra-color)',
  labelColor: 'var(--text-secondary-color)',
  inputTextColor: 'fieldtext',
  linkTextColor: 'var(--extra-color)',
  btnTextColor: 'var(--extra-color)',
  btnBorderColor: 'var(--extra-color)',
  btnBackgroundColor: 'var(--color-white)',
  btnFocusHoverBackgroundColor: 'var(--extra-color)',
  btnFocusHoverTextColor: 'var(--color-white)',
  boxShadowColor: 'var(--color-disabled)',

  // Colors for header
  headerElborderBottomColor: '#e0e0e0',

  //Colors for logo
  logoFill: '#212121', // добавлять два спрайта, дневной и ночной пропсом
  // fill: ${props => props.theme.logoFill};

  // Colors for navigations
  NavLinkColor: 'var(--text-main-color)', //Only for desktop
  NavLinkHoverColor: 'var(--extra-color)', //Only for desktop
};
