import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalStyled, Overlay } from './Modal.styled';
import { Contacts} from '../Contacts/Contacts';
import Box from '../Box/Box';


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose }) => {

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
        <ModalStyled>
            <Box>
                <Contacts/>
            </Box>
        </ModalStyled>
        </Overlay>, modalRoot,

)}

