import React from 'react';
import ReactDOM from 'react-dom';
import { RiCloseFill } from 'react-icons/ri';
import { IoMdReturnLeft } from 'react-icons/io';
import Button from '../Button';
import { Link } from 'react-router-dom';
import {
  ModalOverlay,
  ModalWrapper,
  ModalContainer,
  TurnBack,
  ModalContent,
} from './Modal.styled';
import {
  Title,
  Text,
  Line,
  List,
  TitleList,
  Item,
} from './ModalContent.styled';
import { ButtonClose } from './ModalContent.styled';

const modalRoot = document.querySelector('#modal');

const Modal = ({ isShowing, hide, children, calories, products, id }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay />
          <ModalWrapper onClick={hide}>
            <TurnBack>
              <Link to="/">
                <IoMdReturnLeft size={13} />
              </Link>
            </TurnBack>
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
                <Title>Your recommended daily calorie intake is</Title>
                <Text>{calories} cal</Text>
                <Line />
                <TitleList>Foods you should not eat</TitleList>
                <List>
                  {products.map(product => (
                    <Item>{product}</Item>
                  ))}
                </List>
                <Button type="button" size="long">
                  Start losing weight
                </Button>
              </ModalContent>
            </ModalContainer>
          </ModalWrapper>
        </React.Fragment>,
        modalRoot
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
