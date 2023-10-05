import { FooterStyled, LinkStyled } from './Footer.styled';
import Language from 'components/Language/Language';
import { useState, useContext } from 'react';
import { ModalContacts } from '../Modal/ModalContacts';
import { ModalPrint } from '../Modal/ModalPrint';
import { Socials } from '../Socials/Socials';
import { ThrowContext } from '../Context/Context';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { selected } = useContext(ThrowContext);
  const { t } = useTranslation();

  const [showModalContacts, setShowModalContacts] = useState(false);
  const [showModalPrint, setShowModalPrint] = useState(false);

  const toggleModalContacts = () => {
    setShowModalContacts(!showModalContacts);
  };

  const toggleModalPrint = () => {
    setShowModalPrint(!showModalPrint);
  };

  if (!selected) {
    return null;
  }

  return (
    <>
      <FooterStyled>
        <Language place={'footer'} />
        <LinkStyled onClick={toggleModalContacts}>{t('Contacts')}</LinkStyled>
        <Socials />
        <LinkStyled className="print" onClick={toggleModalPrint}>
          {t('Print Summary')}
        </LinkStyled>
      </FooterStyled>
      {showModalContacts && <ModalContacts onClose={toggleModalContacts} />}
      {showModalPrint && <ModalPrint onClose={toggleModalPrint} />}
    </>
  );
};
