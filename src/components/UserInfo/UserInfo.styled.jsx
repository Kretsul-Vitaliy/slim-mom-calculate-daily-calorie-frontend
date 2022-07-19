import styled from 'styled-components';

const UserInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const UserName = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  text-align: right;
  letter-spacing: 0.04em;

  font-family: 'GothamPro';

  color: ${props => props.theme.exitButtonColor};
`;

const ExitButton = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;

  font-family: 'GothamPro';

  font-weight: 700;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;

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
