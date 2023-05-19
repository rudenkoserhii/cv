import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  ListStyled,
  LinkStyled,
  Text,
  Img,
  ListItem,
  Title,
} from './Experience.styled';
import { useContext } from 'react';
import { ThrowContext } from '../../components/Context/Context';
import { nanoid } from 'nanoid';

const Experience = () => {
  const { selected } = useContext(ThrowContext);
  const location = useLocation();

  return (
    <>
      <Title className="first">Work experience</Title>
      <ListStyled className="second">
        {selected.jobs.map(({ companyName, logo }) => (
          <ListItem key={nanoid()}>
            <LinkStyled to={companyName} state={{ from: location }}>
              <Text className="companyName">{companyName}</Text>
              <Img
                src={logo}
                alt={`Logo ${companyName}`}
                width="160px"
                height="160px"
              />
            </LinkStyled>
          </ListItem>
        ))}
      </ListStyled>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Experience;
