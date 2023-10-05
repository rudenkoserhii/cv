import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from '../../img/nav_icons/home.svg';
import { ReactComponent as About } from '../../img/nav_icons/about.svg';
import { ReactComponent as Portfolio } from '../../img/nav_icons/portfolio.svg';
import { ReactComponent as Skills } from '../../img/nav_icons/skills.svg';
import { ReactComponent as Experience } from '../../img/nav_icons/experience.svg';
import { ReactComponent as Education } from '../../img/nav_icons/education.svg';

export const HomeStyled = styled(Home)`
  width: 30px;
  height: 36px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};

  @media screen and (min-width: 768px) {
  width: 40px;
  height: 48px;
  }

  @media screen and (min-width: 1280px) {
  width: 50px;
  height: 60px;
  }
`;

export const AboutStyled = styled(About)`
  width: 30px;
  height: 36px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};

  @media screen and (min-width: 768px) {
  width: 40px;
  height: 48px;
  }

  @media screen and (min-width: 1280px) {
  width: 50px;
  height: 60px;
  }
`;

export const PortfolioStyled = styled(Portfolio)`
  width: 30px;
  height: 36px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};

  @media screen and (min-width: 768px) {
  width: 40px;
  height: 48px;
  }

  @media screen and (min-width: 1280px) {
  width: 50px;
  height: 60px;
  }
`;

export const SkillsStyled = styled(Skills)`
  width: 30px;
  height: 36px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};

  @media screen and (min-width: 768px) {
  width: 40px;
  height: 48px;
  }

  @media screen and (min-width: 1280px) {
  width: 50px;
  height: 60px;
  }
`;

export const ExperienceStyled = styled(Experience)`
  width: 30px;
  height: 36px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};

  @media screen and (min-width: 768px) {
  width: 40px;
  height: 48px;
  }

  @media screen and (min-width: 1280px) {
  width: 50px;
  height: 60px;
  }
`;

export const EducationStyled = styled(Education)`
  width: 30px;
  height: 36px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};

  @media screen and (min-width: 768px) {
  width: 40px;
  height: 48px;
  }

  @media screen and (min-width: 1280px) {
  width: 50px;
  height: 60px;
  }
`;

export const Wrap = styled.nav`
`;

export const NavLinkStyled = styled(NavLink)`
display: inline-block;
  margin: auto;
max-height: 60px;
  & > .navIcon {
    transition: all 200ms ease;
  }

  &.active .navIcon {
    fill: ${p => p.theme.colors.seablue};
  }
  &:hover:not(.active) .navIcon {
    fill: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};
    transition: all 200ms ease;
  }
&.active {
pointer-events: none;
}
`;

export const ListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: ${p => p.theme.space[5]}px;


  @media screen and (min-width: 1280px) {
  flex-direction: column;
}

`;

export const ListItem = styled.li``;
