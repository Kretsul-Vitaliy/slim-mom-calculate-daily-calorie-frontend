import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  @media only screen and (min-width: 769px) {
    background: rgba(33, 33, 33, 0.12);
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const ModalContainer = styled.div`
  font-family: Verdana-Bold;
  z-index: 100;
  background: white;
  position: relative;
  width: 100vw;
  padding-top: 40px;
  padding-bottom: 119px;
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (min-width: 769px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 672px;
    padding-top: 64px;
    padding-bottom: 81px;
    padding-left: 82px;
    padding-right: 82px;
  }
`;

const TurnBack = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 40px;
  width: 100%;
  background: #eff1f3;
  @media only screen and (min-width: 769px) {
    display: none;
  }

  button {
    border: none;
  }
`;
const ButtonClose = styled.button`
  display: none;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: white;
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    transform: scale(1.3);
  }

  @media only screen and (min-width: 769px) {
    display: block;
  }
`;

const UserInfoWrapper = styled.div`
  margin-left: auto;
  margin-right: 10px;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export {
  ModalContainer,
  TurnBack,
  ModalOverlay,
  ModalWrapper,
  ButtonClose,
  UserInfoWrapper,
};
