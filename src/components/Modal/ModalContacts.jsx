import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalContactsStyled,
  Overlay,
  ButtonCloseContacts,
} from './Modal.styled';
import { Contacts } from '../Contacts/Contacts';

const modalRoot = document.querySelector('#modal-root');

export const ModalContacts = ({ onClose }) => {
  useEffect(() => {
    if (window) {
      window.addEventListener('keydown', onClickEscape);
    }
    return () => {
      window.removeEventListener('keydown', onClickEscape);
    };
  });

  const onClickEscape = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const onClickButtonClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onClickBackdrop}>
      <ModalContactsStyled>
        <ButtonCloseContacts onClick={onClickButtonClose} />
        <Contacts />
      </ModalContactsStyled>
    </Overlay>,
    modalRoot
  );
};
