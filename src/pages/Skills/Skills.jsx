import { ListStyled, NavLinkStyled, Title } from './Skills.styled';
import { useLocation } from 'react-router-dom';

const Skills = () => {
  const location = useLocation();

  return (
    <>
      <Title>Skiils</Title>
      <ListStyled>
        <NavLinkStyled to="soft" state={{ from: location }}>Soft Skiils</NavLinkStyled>
        <NavLinkStyled to="tech" state={{ from: location }}>Tech Skills</NavLinkStyled>
      </ListStyled>
    </>
  );
};

export default Skills;