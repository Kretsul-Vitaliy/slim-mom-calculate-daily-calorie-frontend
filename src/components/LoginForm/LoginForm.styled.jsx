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
  line-height: 0.82;
  letter-spacing: 0.04em;

  color: var(--text-secondary-color);
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid var(--header-divider-color);
  height: 20px;
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

export const StyledNavLink = styled(NavLink)`
  color: var(--extra-color);

  button:hover & {
    color: var(--color-white);
  }

  button:focus & {
    color: var(--color-white);
  }
`;
