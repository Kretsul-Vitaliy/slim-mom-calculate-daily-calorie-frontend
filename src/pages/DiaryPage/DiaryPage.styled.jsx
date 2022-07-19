import styled from 'styled-components';

export const DesctopForm = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ButtonOpenModal = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
