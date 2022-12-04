import { FooterStyled, Link, Button } from './Footer.styled';
import { useState, useContext } from 'react';
import { Modal } from '../Modal/Modal';
import { Socials } from '../Socials/Socials';
import { ThrowContext } from '../Context/Context';

export const Footer = () => {
  const { theme, setTheme } = useContext(ThrowContext);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
<>
    <FooterStyled>
      <Button onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}>Toggle theme</Button>
      <Link onClick={toggleModal}>Contacts</Link>
      <Socials/>
      <p>footer</p>
    </FooterStyled>
    {(showModal) && <Modal onClose={toggleModal}/>}</>
  );
};