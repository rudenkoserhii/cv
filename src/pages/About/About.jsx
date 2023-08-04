import { Text, Title } from './About.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { selected } = useContext(ThrowContext);
  const { t } = useTranslation();

  return (
    <>
      <Title className="first">{t('About me')}</Title>
      {selected.about.split('<br>').map(p => (
        <Text key={nanoid()} className="second">
          {t(p)}
        </Text>
      ))}
    </>
  );
};

export default About;
