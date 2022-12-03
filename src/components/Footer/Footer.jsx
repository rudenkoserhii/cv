import { FooterStyled, Link } from './Footer.styled';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Socials } from '../Socials/Socials';

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
<>
    <FooterStyled>
      <Link onClick={toggleModal}>Contacts</Link>
      <Socials/>
      <p>footer</p>
    </FooterStyled>
    {(showModal) && <Modal onClose={toggleModal}/>}</>
  );
};