import { FooterStyled, Link, Button } from './Footer.styled';
import { useState, useContext } from 'react';
import { Modal } from '../Modal/Modal';
import { Socials } from '../Socials/Socials';
import { ThrowContext } from '../Context/Context';

export const Footer = () => {
  const { theme, setTheme, selected } = useContext(ThrowContext);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  if (!selected) {
    return null;
  }

  return (
<>
    <FooterStyled>
      <Button onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}>{`Theme ${theme}`}</Button>
      <Link onClick={toggleModal}>Contacts</Link>
      <Socials/>
      <p>Made with React.js</p>
    </FooterStyled>
    {(showModal) && <Modal onClose={toggleModal}/>}
</>
  );
};