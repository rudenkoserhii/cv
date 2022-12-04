import { Suspense } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { ListStyled, LinkStyled, Text, Img, ListItem, Title } from './Experience.styled';
import { useContext } from "react";
import { ThrowContext } from '../../components/Context/Context';
import { nanoid } from 'nanoid';

const Experience = () => {
  const { selected } = useContext(ThrowContext);
  const location = useLocation();

  return (
    <>
    <Title>Work experience</Title>
    <ListStyled>
      {selected.jobs.map(({ companyName, logo }) => 
        <ListItem key={nanoid()}>
          <LinkStyled to={companyName}  state={{ from: location }}>
            <Text>{companyName}</Text>
            <Img src={logo} alt={`Logo ${companyName}`} width="200px" height="100px"/>
          </LinkStyled>
        </ListItem>
      )}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </ListStyled></>);
};

export default Experience;