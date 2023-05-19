import {
  ListStyled,
  ListItem,
  LinkStyled,
  Img,
  Text,
} from '../Skills/Skills.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { useLocation, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Skill = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/skills';

  const { selected } = useContext(ThrowContext);

  const { skill } = useParams();

  const array =
    skill === 'soft'
      ? selected.skills.find(skill => skill.soft)['soft']
      : selected.skills.find(skill => skill.tech)['tech'];

  return (
    <>
      <LinkStyled to={backLinkHref} className="first">
        <span>Back</span>
      </LinkStyled>
      <ListStyled className="second">
        {array.map(({ name, icon }) => (
          <ListItem key={nanoid()}>
            <Img src={icon} alt={`Icon ${name}`} />
            <Text>{name}</Text>
          </ListItem>
        ))}
      </ListStyled>
    </>
  );
};

export default Skill;
