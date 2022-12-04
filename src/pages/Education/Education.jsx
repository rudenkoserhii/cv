import { Text, Paragraph, Title } from './Education.styled';
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';


const Education = () => {
    const { selected } = useContext(ThrowContext);

    const { name, dateStart, dateEnd, speciality, country, city } = selected.education;


    return (
        <>
            <Title>Education</Title>
            <Text>{name}</Text>

            <Text>{speciality}</Text>
            <Text>
                <Paragraph>{dateStart} - </Paragraph>
                <Paragraph>{dateEnd} | </Paragraph>
                <Paragraph>{country}, </Paragraph>
                <Paragraph>{city}</Paragraph>

            </Text>
        </>
)};

export default Education;