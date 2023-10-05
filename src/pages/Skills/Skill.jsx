import {
  ListStyled,
  ListItem,
  LinkStyled,
  Img,
  Text,
  SpanBack,
} from '../Skills/Skills.styled';
import { Arrow } from 'components/ExperienceItem/ExperienceItem.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { shuffle } from 'utils/shuffle';

const Skill = () => {
  const backLinkHref = '/skills';

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
        <Arrow />
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
