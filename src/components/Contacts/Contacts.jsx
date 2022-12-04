import { Link } from "./Contacts.styled";
import Box from '../Box/Box';
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';

export const Contacts = () => {
    const { selected } = useContext(ThrowContext);
    const { email, phone } = selected;

    return (
        <Box><Link href={`mailto:${email}`}>{email}</Link><Link href={`tel:${phone}`}>{phone}</Link></Box>
)};
