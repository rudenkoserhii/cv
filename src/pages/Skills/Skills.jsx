import { ListStyled, NavLinkStyled, Title } from './Skills.styled';
import { useLocation } from 'react-router-dom';

const Skills = () => {
  const location = useLocation();

  return (
    <>
      <Title>Work experience</Title>
      <ListStyled>
        <NavLinkStyled to="soft" state={{ from: location }}>Soft Skiils</NavLinkStyled>
        <NavLinkStyled to="tech">Tech Skills</NavLinkStyled>
      </ListStyled>
    </>
  );
};

export default Skills;