import { Text, Title } from "./About.styled";
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';


const About = () => {
    const { selected } = useContext(ThrowContext);

    return (
        <>
            <Title className="first">About me</Title>
            <Text className="second">{selected.about}</Text>
        </>
    )
};

export default About;
