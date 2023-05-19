import {
  Text,
  Paragraph,
  Title,
  ListItem,
  ListStyled,
} from './Education.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import Box from 'components/Box/Box';
import { nanoid } from 'nanoid';

const Education = () => {
  const { selected } = useContext(ThrowContext);

  return (
    <>
      <Title className="first">Education</Title>
      <ListStyled className="second">
        {selected.education.map(
          ({ name, dateStart, dateEnd, speciality, country, city }) => (
            <ListItem key={nanoid()}>
              <Box className="third">
                <Text>
                  <b>{name}</b>
                </Text>
                <Text>{speciality}</Text>
                <Text>
                  <Paragraph>{dateStart} - </Paragraph>
                  <Paragraph>{dateEnd}</Paragraph>
                  <br />
                  <Paragraph>{city}, </Paragraph>
                  <Paragraph>{country}</Paragraph>
                </Text>
              </Box>
            </ListItem>
          )
        )}
      </ListStyled>
    </>
  );
};

export default Education;
