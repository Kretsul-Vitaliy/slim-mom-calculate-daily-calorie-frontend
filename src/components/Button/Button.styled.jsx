import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: ${props =>
    props.disabled
      ? `var(--header-divider-color)`
      : props.theme.btnBackgroundColor};
  color: ${props =>
    props.disabled ? `var(--text-secondary-color)` : props.theme.btnTextColor};
  border: ${props =>
    props.disabled ? 'none' : `1px solid ${props.theme.btnBorderColor}`};

  border-radius: 30px;

  &[disabled] {
    cursor: not-allowed;
  }

  &:not([disabled]) {
    &:hover,
    :focus {
      background: ${props => props.theme.btnFocusHoverBackgroundColor};
      color: ${props => props.theme.btnFocusHoverTextColor};
      box-shadow: 0px 4px 10px ${props => props.theme.boxShadowColor};
    }
  }

  cursor: pointer;

  ${props => {
    switch (props.size) {
      case 'short':
        return `
                width: 182px;
                height: 44px;
               
            `;
      case 'long':
        return `
                display: block;
                padding:13px 25px;
                width:210px;
                margin: auto;
                
            `;
      case 'addBtn':
        return `padding:13px 46px;
                width:176px;
            `;
      case 'addRoundBtn':
        return `padding:12.48px;
                width:48px;
                height:48px;
                font-size: 30px;
    line-height: 22px;`;
      default:
        return `
            padding:13px 51px;
            width:13px 51px;
        `;
    }
  }};
`;
