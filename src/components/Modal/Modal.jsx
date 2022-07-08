import React from "react";
import ReactDOM from "react-dom";
import { RiCloseFill } from "react-icons/ri";
import {
  ModalOverlay,
  ModalWrapper,
  ModalContainer,
  ModalContent,
} from "./Modal.styled";
import { Title, Text, Line, List, Item } from "./ModalContent.styled";
import { ButtonClose } from "./ModalContent.styled";
const Modal = ({ isShowing, hide, children }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay />
          <ModalWrapper onClick={hide}>
            <ModalContainer>
              <ButtonClose
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <RiCloseFill size={23} />
              </ButtonClose>
              <ModalContent>
                {/* {children} */}
                <Title>
                  Your recommended daily
                  <br /> calorie intake is
                </Title>
                <Text>
                  2800 cal
                  {/* кількість каллорій (приходить з бека) */}
                </Text>
                <Line />
                <List>
                  Foods you should not eat
                  <Item>список (приходить з бека)</Item>
                </List>
              </ModalContent>
              <button>Start losing weight</button>
            </ModalContainer>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { createPortal } from 'react-dom';
// import { OverlayModal, ModalBox } from './Modal.styled';

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.closeOnKeydown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.closeOnKeydown);
//   }

//   closeOnKeydown = (event) => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   closeOnBackdrop = (event) => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };
//   handleKeyDown = (e) => {
//     if (e.code === 'ArrowLeft') {
//       this.props.onLeft();
//     } else if (e.code === 'ArrowRight') {
//       this.props.onRight();
//     }
//   };
//   render() {
//     const modalRoot = document.getElementById('modal-root');
//     return createPortal(
//       <OverlayModal onClick={this.closeOnBackdrop}>
//         <ModalBox>{this.props.children}</ModalBox>
//       </OverlayModal>,
//       modalRoot
//     );
//   }
// }

// export default Modal;

// Modal.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func,
//   src: PropTypes.string,
//   tags: PropTypes.string,
// };
