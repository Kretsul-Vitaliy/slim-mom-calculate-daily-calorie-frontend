import React from 'react';
import ReactDOM from 'react-dom';
// import { RiCloseFill } from 'react-icons/ri';
import {
  ModalOverlay,
  ModalWrapper,
  ModalContainer,
  // ButtonClose,
} from './ModalTeam.styled';

const modalRoot = document.querySelector('#modal');

const ModalTeam = ({ isShowing, hide, children }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay />
          <ModalWrapper onClick={hide}>
            <ModalContainer
              onClick={e => {
                e.stopPropagation();
              }}
            >
              {/* <ButtonClose
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <RiCloseFill size={23} />
              </ButtonClose> */}
              {children}
            </ModalContainer>
          </ModalWrapper>
        </React.Fragment>,
        modalRoot
      )
    : null;
};

export default ModalTeam;
