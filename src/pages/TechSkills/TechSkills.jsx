import { ListStyled, ListItem, LinkStyled, Img, Text } from "../Skills/Skills.styled";
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

const TechSkills = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  const { selected } = useContext(ThrowContext);

  return (
    <>
    <LinkStyled to={backLinkHref}>Back</LinkStyled>
    <ListStyled>
      {selected.skills[1].tech.map(({ name, icon }) => <ListItem key={nanoid()}><Img src={icon} alt={`Icon ${name}`} width="50px"/><Text>{name}</Text></ListItem>)}
    </ListStyled>
    </>
  )
};

export default TechSkills;