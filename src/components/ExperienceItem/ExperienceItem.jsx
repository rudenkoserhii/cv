import {
  LinkBack,
  Span,
  Text,
  List,
  Item,
  Div,
  Arrow,
} from './ExperienceItem.styled';
import { SpanBack } from 'pages/Skills/Skills.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

const ExperienceItem = () => {
  const backLinkHref = '/experience';

  const { company } = useParams();

  const { selected } = useContext(ThrowContext);
  const { t } = useTranslation();

  const selectedCompany = selected.jobs.find(
    ({ companyName }) => companyName === company
  );

  const {
    dateStart,
    dateEnd,
    position,
    responsibilities,
    country,
    city,
    companyName,
  } = selectedCompany;

  return (
    <div className="second" key={companyName} style={{ pointerEvents: 'none' }}>
      <LinkBack to={backLinkHref}>
        <SpanBack>{t('Back')}</SpanBack>
      </LinkBack>
      <Div className="item-div">
        <Arrow />
        <Text>{t(position)}</Text>
        <Text>
          <Span>{t(dateStart)} - </Span>
          <Span>{t(dateEnd)} | </Span>
          <Span>{t(city)}, </Span>
          <Span>{t(country)}</Span>
        </Text>
        <List>
          {responsibilities.map(item => (
            <Item key={nanoid()}>{t(item)}</Item>
          ))}
        </List>
      </Div>
    </div>
  );
};

export default ExperienceItem;
