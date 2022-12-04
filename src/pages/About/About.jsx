import { Text, Title } from "./About.styled";
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';


const About = () => {
    const { selected } = useContext(ThrowContext);

    return (
        <>
            <Title>About me</Title>
            <Text>{selected.about}</Text>
        </>
    )
};

export default About;
