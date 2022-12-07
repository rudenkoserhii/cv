import { ListStyled, NavLinkStyled, Title, Text } from './Skills.styled';
import { useLocation } from 'react-router-dom';

const Skills = () => {
  const location = useLocation();

  return (
    <>
      <Title className="first">Skiils</Title>
      <ListStyled className="second">
        <NavLinkStyled to="soft" state={{ from: location }}><Text className='skills'>Soft Skiils</Text></NavLinkStyled>
        <NavLinkStyled to="tech" state={{ from: location }}><Text className='skills'>Tech Skills</Text></NavLinkStyled>
      </ListStyled>
    </>
  );
};

export default Skills;