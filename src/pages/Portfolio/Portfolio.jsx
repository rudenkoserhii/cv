import {
  LinkStyled,
  ListStyled,
  ListItem,
  ListTechStyled,
  ListItemTechStyled,
  Title,
  Text,
  TextTech,
} from './Portfolio.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { nanoid } from 'nanoid';

const Portfolio = () => {
  const { selected } = useContext(ThrowContext);

  return (
    <>
      <Title className="first">Portfolio</Title>
      <ListStyled className="second">
        {selected.portfolios.map(({ name, url, preview, tech }) => (
          <ListItem key={nanoid()}>
            <LinkStyled href={url} target="_blank">
              <Text className="portfolioName">{name}</Text>
              <img
                className="portfolioImg"
                src={preview}
                alt={`Site ${name} preview`}
                width="200px"
              />
              <ListTechStyled>
                {tech.map(item => (
                  <ListItemTechStyled key={nanoid()}>
                    <TextTech className="portfolioText">{item}</TextTech>
                  </ListItemTechStyled>
                ))}
              </ListTechStyled>
            </LinkStyled>
          </ListItem>
        ))}
      </ListStyled>
    </>
  );
};

export default Portfolio;
