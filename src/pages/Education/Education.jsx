import { Text, Paragraph, Title } from './Education.styled';
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';
import Box from 'components/Box/Box';


const Education = () => {
    const { selected } = useContext(ThrowContext);

    const { name, dateStart, dateEnd, speciality, country, city } = selected.education;


    return (
        <>
            <Title className="first">Education</Title>
            <Text className="second"><b>{name}</b></Text>
            <Box className="third">
                <Text>{speciality}</Text>
                <Text>
                    <Paragraph>{dateStart} - </Paragraph>
                    <Paragraph>{dateEnd} | </Paragraph>
                    <Paragraph>{country}, </Paragraph>
                    <Paragraph>{city}</Paragraph>
                </Text>
            </Box>
        </>
)};

export default Education;