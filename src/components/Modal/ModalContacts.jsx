import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContactsStyled, Overlay } from './Modal.styled';
import { Contacts} from '../Contacts/Contacts';

const modalContactsRoot = document.querySelector('#modalContacts-root');

export const ModalContacts = ({ onClose }) => {

    useEffect(() => {
    if (window){
        window.addEventListener('keydown', onClickEscape);
    }
    return () => {
        window.removeEventListener('keydown', onClickEscape);
    }}, )

    const onClickEscape = (e) => {
        if(e.code === 'Escape') {
        onClose();
        }
    }

    const onClickBackdrop = (e) => {
        if(e.currentTarget === e.target) {
            onClose();
        }
    }

    return createPortal(
        <Overlay onClick={onClickBackdrop}>
        <ModalContactsStyled>
                <Contacts/>
        </ModalContactsStyled>
        </Overlay>, modalContactsRoot,

)}

