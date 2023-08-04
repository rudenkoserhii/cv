import {
  ListStyled,
  NavLinkStyled,
  Text,
  IconTech,
  IconSoft,
} from './Skills.styled';
import { Title } from '../About/About.styled';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  const location = useLocation();

  return (
    <>
      <Title className="first">Skiils</Title>
      <ListStyled className="second">
        <NavLinkStyled to="tech" state={{ from: location }}>
          <Text className="skills">Tech Skills</Text>
          <IconTech className="skills__icon"/>
        </NavLinkStyled>
        <NavLinkStyled to="soft" state={{ from: location }}>
          <Text className="skills">Soft Skiils</Text>
          <IconSoft className="skills__icon"/>
        </NavLinkStyled>
      </ListStyled>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

    </>
  );
};

export default Skills;
