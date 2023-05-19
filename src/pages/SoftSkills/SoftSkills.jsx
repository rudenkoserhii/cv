import {
  ListStyled,
  ListItem,
  LinkStyled,
  Img,
  Text,
} from '../Skills/Skills.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

const SoftSkills = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/skills';

  const { selected } = useContext(ThrowContext);

  const arraySoftSkills = selected.skills.find(skill => skill.soft)['soft'];

  return (
    <>
      <LinkStyled to={backLinkHref} className="first">
        Back
      </LinkStyled>
      <ListStyled className="second">
        {arraySoftSkills.map(({ name, icon }) => (
          <ListItem key={nanoid()}>
            <Img src={icon} alt={`Icon ${name}`} />
            <Text>{name}</Text>
          </ListItem>
        ))}
      </ListStyled>
    </>
  );
};

export default SoftSkills;
