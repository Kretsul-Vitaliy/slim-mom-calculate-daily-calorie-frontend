import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  @media screen and (max-width: 767px) {
    max-width: 280px;
    margin: auto;
    margin-top: 60px;
  }

  @media screen and (min-width: 768px) {
    max-width: 396px;
  }
`;
export const Labels = styled.label`
  font-family: Verdana-Bold;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;

  color: ${props => props.theme.labelColor};
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid var(--header-divider-color);
  height: 20px;
  outline: none;
  background: transparent;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &#email {
    margin-bottom: 40px;
  }

  &#password {
    margin-bottom: 60px;
  }

  @media screen and (min-width: 768px) {
    max-width: 240px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    max-width: 280px;
    margin: auto;
    & button:first-child {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 396px;

    & button:first-child {
      margin-right: 32px;
    }
  }
`;

export const ButtonText = styled.span`
  font-family: Verdana-Bold;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
`;
export const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.linkColor};
  padding: 13px 51px;

  button:hover & {
    color: var(--color-white);
  }

  button:focus & {
    color: var(--color-white);
  }
`;
