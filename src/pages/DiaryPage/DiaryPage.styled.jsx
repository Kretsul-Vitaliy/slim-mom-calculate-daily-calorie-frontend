import styled from 'styled-components';

export const DesctopForm = styled.div`
  @media screen and (max-width: 660px) {
    display: none;
  }
`;

export const ButtonOpenModal = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 660px) {
    display: none;
  }
`;
