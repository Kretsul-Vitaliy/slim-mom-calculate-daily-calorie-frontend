import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Labels = styled.label`
  font-family: Verdana;
  font-size: 14px;
  line-height: 0.82;
  letter-spacing: 0.04em;

  color: var(--text-secondary-color);
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid var(--header-divider-color);
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
