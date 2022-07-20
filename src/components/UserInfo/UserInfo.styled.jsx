import styled from 'styled-components';

const UserInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const UserName = styled.p`
  font-family: 'Gotham Pro';
  font-weight: 700;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${props => props.theme.exitButtonColor};
  @media screen and (min-width: 768px) {
    line-height: 0.9;
  }
`;

const ExitButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: 'Gotham Pro';
  font-weight: 700;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${props => props.theme.exitButtonColor};
  @media screen and (min-width: 768px) {
    line-height: 0.9;
  }
  color: ${props => props.theme.exitButtonColor};
  transition: var(--transition);
  &:hover {
    color: ${props => props.theme.exitButtonHoverColor};
  }
`;

const Divider = styled.div`
  display: block;
  width: 2px;
  height: 32px;
  background-color: var(--header-divider-color);
`;
export { UserInfoBlock, Divider, UserName, ExitButton };
