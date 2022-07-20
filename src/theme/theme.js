const darckThemeBodyColor = 'rgb(0,0,0, 0.9)';
const darckThemeTextColor = '#1ee41e';
const darckboxShadowColor = '#49df49fa';

export const darkTheme = {
  body: `${darckThemeBodyColor}`,

  // Colors for registration and login forms
  titleColor: `${darckThemeTextColor}`,
  labelColor: `${darckThemeTextColor}`,
  MessageErrorColor: 'var(--color-white)',
  inputTextColor: `${darckThemeTextColor}`,
  btnTextColor: `${darckThemeTextColor}`,
  btnBorderColor: `${darckThemeTextColor}`,
  btnBackgroundColor: `${darckThemeBodyColor}`,
  btnFocusHoverBackgroundColor: `${darckThemeBodyColor}`,
  btnFocusHoverTextColor: `${darckThemeTextColor}`,
  boxShadowColor: `${darckboxShadowColor}`,

  // Colors for header
  headerElborderBottomColor: 'var(--text-secondary-color)',
  headerLogoBorderColor: `${darckThemeTextColor}`,

  // Colors for Navigations
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

  // Colors for DiaryDateCalendar
  calendarColor: `${darckThemeTextColor}`,

  // Colors for DiaryAddProductForm
  liHoverColor: `${darckThemeTextColor}`, //(line 66)
  divPColor: 'red', //(line 118)
  inputColor: `${darckThemeTextColor}`, //(line 135)
  inputFocusColor: `${darckThemeTextColor}`, //(line 147)

  // Colors for DiaryProductListItem
  liPCloseColor: `${darckThemeTextColor}`, //(line 39)
  ioMdCloseColor: `${darckThemeTextColor}`, //(line 31 not styles)

  //Colors for LanguageSelector
  langButtonColor: `${darckThemeTextColor}`, //(Line 89)
  langButtonHoverColor: 'var(--color-white)', //(Line 101)
  langMenuColor: 'var(--text-secondary-color)',

  //Colors for UserInfo
  exitButtonColor: `${darckThemeTextColor}`,
  exitButtonHoverColor: 'var(--color-white)',

  // Colors for switcher button
  btnSwitcherBackgroundColor: 'linear-gradient(90deg, #1ee41e, #191970)',

  // Colors for footer
  footerBorderdColor: 'var(--page-secondary-color)',
};

export const lightTheme = {
  body: '#fff',

  // Colors for registration and login forms
  titleColor: 'var(--extra-color)',
  labelColor: 'var(--text-secondary-color)',
  MessageErrorColor: 'var(--text-secondary-color)',
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
  headerLogoBorderColor: 'var(--color-white)',

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

  // Colors for DiaryDateCalendar
  calendarColor: 'var(--text-main-color)',

  // Colors for DiaryAddProductForm
  liHoverColor: 'var(--extra-color)', //(line 66)
  divPColor: 'var(--extra-color)', //(line 118)
  inputColor: 'var(--text-secondary-color)', //(line 135)
  inputFocusColor: 'var(--extra-color)', //(line 147)

  // Colors for DiaryProductListItem
  liPCloseColor: 'var(--text-main-color)', //(line 39)
  ioMdCloseColor: '#9B9FAA', //(line 31 not styles)

  //Colors for LanguageSelector
  langButtonColor: 'var(--text-main-color)', //(Line 89)
  langButtonHoverColor: 'var(--extra-color)', //(Line 101)
  langMenuColor: '#fff',

  //Colors for UserInfo
  exitButtonColor: 'var(--text-secondary-color);',
  exitButtonHoverColor: 'var(--extra-color)',

  // Colors for switcher button
  btnSwitcherBackgroundColor: 'linear-gradient(90deg, #e25c03, #ecf008)',

  // Colors for footer
  footerBorderdColor: 'var(--page-secondary-color)',
};
