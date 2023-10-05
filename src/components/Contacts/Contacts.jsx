import { Link, Gmail, Messengers } from './Contacts.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import gmail from '../../img/contacts/gmail.png';
import messengers from '../../img/contacts/messengers.png';

export const Contacts = () => {
  const { selected } = useContext(ThrowContext);
  const { email, phone } = selected;

  return (
    <>
      <Gmail src={gmail} alt="Gmail logo" width="760px" />
      <Link href={`mailto:${email}`}>{email}</Link>
      <Link href={`tel:${phone}`}>{phone}</Link>
      <Messengers src={messengers} alt="Messengers logos" width="511px" />
    </>
  );
};
