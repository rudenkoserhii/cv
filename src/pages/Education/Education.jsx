import {
  Text,
  Paragraph,
  ListItem,
  ListStyled,
} from './Education.styled';
import { Title } from '../About/About.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { selected } = useContext(ThrowContext);
  const { t } = useTranslation();

  return (
    <>
      <Title className="first">{t('Education')}</Title>
      <ListStyled className="second">
        {selected.education.map(
          ({ name, dateStart, dateEnd, speciality, country, city, logo }) => (
            <ListItem key={nanoid()} logo={logo}>
              <div className="third">
                <Text>
                  <b>{t(name)}</b>
                </Text>
                <Text>{t(speciality)}</Text>
                <Text>
                  <Paragraph>{t(dateStart)} - </Paragraph>
                  <Paragraph>{t(dateEnd)}</Paragraph>
                  <br />
                  <Paragraph>{t(city)}, </Paragraph>
                  <Paragraph>{t(country)}</Paragraph>
                </Text>
              </div>
            </ListItem>
          )
        )}
      </ListStyled>
    </>
  );
};

export default Education;
