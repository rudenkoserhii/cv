import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { ListStyled, LinkStyled } from './Experience.styled';
// import works from '../../works.json'


const Experience = () => {

  // const { companyName, dateStart, dateEnd, position, responsibilities, country, city, logo } = JSON.parse(works);

  return (
    <>
    <ListStyled>
    <LinkStyled to=''>Go back</LinkStyled>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </ListStyled></>);
};

export default Experience;