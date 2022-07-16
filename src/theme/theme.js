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
  headerBackgroundColor: '#ffffff85',
  headerElborderBottomColor: 'var(--text-secondary-color)',

  // Colors for navigations
  navLinkColor: `${darckThemeTextColor}`, //Only for desktop
  navLinkHoverColor: 'var(--color-white)', //Only for desktop

  // Colors for dailyCaloriForm
  dailyCaloriFormTittleColor: `${darckThemeTextColor}`,
  dailyCaloriFormInputColor: `${darckThemeTextColor}`,
  dailyCaloriFormLabelColor: `${darckThemeTextColor}`,
  dailyCaloriFormFocusHoverColor: 'var(--text-secondary-color)',
  dailyCaloriFormRadioTitleColor: `${darckThemeTextColor}`,
  dailyCaloriFormRadioInputColor: `${darckThemeTextColor}`,
  dailyCaloriFormBackgroundAfterColor: `${darckThemeTextColor}`,
  dailyCaloriFormChekedColor: 'var(--color-white)',

  // Colors for switcher button
  btnSwitcherBackgroundColor: 'linear-gradient(90deg, #1ee41e, #191970)',
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
  headerBackgroundColor: 'rgb(0, 0, 0, 0)',
  headerElborderBottomColor: '#e0e0e0',

  // Colors for navigations
  navLinkColor: 'var(--text-main-color)', //Only for desktop
  navLinkHoverColor: 'var(--extra-color)', //Only for desktop

  // Colors for dailyCaloriForm
  dailyCaloriFormTittleColor: '#212121',
  dailyCaloriFormInputColor: 'var(--text-secondary-color)',
  dailyCaloriFormLabelColor: 'var(--text-secondary-color)',
  dailyCaloriFormFocusHoverColor: 'var(--extra-color)',
  dailyCaloriFormRadioTitleColor: 'var(--text-secondary-color)',
  dailyCaloriFormRadioInputColor: '#9b9faa',
  dailyCaloriFormBackgroundAfterColor: 'var(--extra-color)',
  dailyCaloriFormChekedColor: 'var(--extra-color)',

  // Colors for switcher button
  btnSwitcherBackgroundColor: 'linear-gradient(90deg, #e25c03, #ecf008)',
};
