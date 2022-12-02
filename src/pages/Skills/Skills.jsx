import { ListStyled, LinkStyled } from './Skills.styled';



const Skills = () => {
  return (
    <ListStyled>
      <LinkStyled to="soft">Soft Skiils</LinkStyled>
      <LinkStyled to="tech">Tech Skills</LinkStyled>
    </ListStyled>
  );
};

export default Skills;