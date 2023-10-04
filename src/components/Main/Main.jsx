import { Outlet, useLocation } from 'react-router-dom';
import { SectionStyled, MainStyled } from './Main.styled';
import { Suspense, useEffect } from 'react';

export const Main = () => {
const location = useLocation();

useEffect(() => {
if (location.pathname !== '/') {
document.querySelector('section').classList.add('flag');
} else {document.querySelector('section').classList.remove('flag');}
}, [location.pathname])

  return (
    <MainStyled>
      <SectionStyled>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </SectionStyled>
    </MainStyled>
  );
};
