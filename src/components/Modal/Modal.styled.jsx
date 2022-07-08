import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background: rgba(33, 33, 33, 0.12);
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const ModalContainer = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 40px;
  padding-bottom: 116px;
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (min-width: 769px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 672px;
    height: 573px;
    padding-top: 64px;
    padding-bottom: 81px;
    padding-left: 171px;
    padding-right: 171px;
  }
`;

const ModalContent = styled.div`
  color: black;
`;
export { ModalContainer, ModalContent, ModalOverlay, ModalWrapper };

// export const OverlayModal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 1200;
// `;
// export const ModalBox = styled.div`
//   max-width: calc(100vw - 48px);
//   max-height: calc(100vh - 24px);
//   overflow: auto;
// `;
