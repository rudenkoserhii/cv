import { ListStyled, ListItem, LinkStyled, Img, Text } from "../Skills/Skills.styled";
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

const TechSkills = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/skills";

  const { selected } = useContext(ThrowContext);

  const arrayTechSkills = selected.skills.find(skill => skill.tech)['tech'];

  return (
    <>
    <LinkStyled to={backLinkHref} className="first">Back</LinkStyled>
    <ListStyled className="second">
      {arrayTechSkills.map(({ name, icon }) => <ListItem key={nanoid()}><Img src={icon} alt={`Icon ${name}`} width="50px"/><Text>{name}</Text></ListItem>)}
    </ListStyled>
    </>
  )
};

export default TechSkills;