import { Text, Title } from './About.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';

const About = () => {
  const { selected } = useContext(ThrowContext);

  return (
    <>
      <Title className="first">About me</Title>
      {selected.about.split('<br>').map(p => (
        <Text className="second">{p}</Text>
      ))}
    </>
  );
};

export default About;
