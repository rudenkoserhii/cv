import {
  ListStyled,
  ListItem,
  LinkStyled,
  Img,
  Text,
  SpanBack,
} from '../Skills/Skills.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { useLocation, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { shuffle } from 'utils/shuffle';

const Skill = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/skills';

  const { selected } = useContext(ThrowContext);
  const { t } = useTranslation();

  const { skill } = useParams();

  const array =
    skill === 'soft'
      ? selected.skills.find(skill => skill.soft)['soft']
      : selected.skills.find(skill => skill.tech)['tech'];

  return (
    <>
      <LinkStyled to={backLinkHref} className="first">
        <SpanBack>{t('Back')}</SpanBack>
      </LinkStyled>
      <ListStyled className="second skill">
        {shuffle(array).map(({ name, icon }) => (
          <ListItem key={nanoid()}>
            <Img src={icon} alt={`Icon ${name}`} />
            <Text>{t(name)}</Text>
          </ListItem>
        ))}
      </ListStyled>
    </>
  );
};

export default Skill;
