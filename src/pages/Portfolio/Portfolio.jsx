import {
  LinkStyled,
  ListStyled,
  ListItem,
  ListTechStyled,
  ListItemTechStyled,
  Text,
  TextTech,
} from './Portfolio.styled';
import { Title } from '../About/About.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
import { Arrow } from 'components/ExperienceItem/ExperienceItem.styled';

const Portfolio = () => {
  const { selected } = useContext(ThrowContext);
  const { t } = useTranslation();

  const toggleStackTechnologies = e => {
e.currentTarget.children[0].style.visibility = 'visible'
    e.currentTarget.children[0].classList.toggle('fourth');
    e.currentTarget.children[0].classList.toggle('fifth');
    document.querySelectorAll('.portfolioText').forEach(el => {
      if (
        el !== e.currentTarget.children[0] &&
        el.classList.contains('fourth')
      ) {
        el.classList.add('fifth');
        el.classList.remove('fourth');
      }
    });
  };

  return (
    <>
      <Title className="first">{t('Portfolio')}</Title>
      <ListStyled className="second">
<Arrow/>
        {selected.portfolios.map(({ name, url, preview, tech, production }) => (
          <ListItem key={nanoid()}>
            <LinkStyled href={url} target="_blank">
              <Text className="portfolioName">{name}</Text>
              <img
                className="portfolioImg"
                src={preview}
                alt={`Site ${name} preview`}
                width="200px"
style={{display: 'block'}}
              />
            </LinkStyled>
            <Text className="portfolioProduction">- {t(production)} -</Text>
            <Text
              as="div"
              className="portfolioStack"
              onClick={toggleStackTechnologies}
            >
              {'\u21D3'} {t('Stack Technologies')} {'\u21D3'}
              <ListTechStyled className="portfolioText fifth">
                {tech.map(item => (
                  <ListItemTechStyled key={nanoid()}>
                    <TextTech>{item}</TextTech>
                  </ListItemTechStyled>
                ))}
              </ListTechStyled>
            </Text>
          </ListItem>
        ))}
      </ListStyled>
    </>
  );
};

export default Portfolio;
