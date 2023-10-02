import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from '../../img/nav_icons/home.svg';
import { ReactComponent as About } from '../../img/nav_icons/about.svg';
import { ReactComponent as Portfolio } from '../../img/nav_icons/portfolio.svg';
import { ReactComponent as Skills } from '../../img/nav_icons/skills.svg';
import { ReactComponent as Experience } from '../../img/nav_icons/experience.svg';
import { ReactComponent as Education } from '../../img/nav_icons/education.svg';

export const HomeStyled = styled(Home)`
  width: 50px;
  height: 60px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};
`;

export const AboutStyled = styled(About)`
  width: 50px;
  height: 60px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};
`;

export const PortfolioStyled = styled(Portfolio)`
  width: 50px;
  height: 60px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};
`;

export const SkillsStyled = styled(Skills)`
  width: 50px;
  height: 60px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};
`;

export const ExperienceStyled = styled(Experience)`
  width: 50px;
  height: 60px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};
`;

export const EducationStyled = styled(Education)`
  width: 50px;
  max-height: 60px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};
`;

export const Wrap = styled.nav`
display: none;
  @media screen and (min-width: 1280px) {
    display: block;
  }

`;

export const NavLinkStyled = styled(NavLink)`
  margin: auto;

  & > .navIcon {
    transition: all 200ms ease;
  }

  &.active .navIcon {
    fill: ${p => p.theme.colors.seablue};
  }
  :hover:not(.active) .navIcon {
    fill: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};
    transition: all 200ms ease;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: ${p => p.theme.space[5]}px;
`;

export const ListItem = styled.li``;
