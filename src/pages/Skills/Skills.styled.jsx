import { NavLink, Link } from 'react-router-dom';

import styled from 'styled-components';
import { ReactComponent as Soft } from '../../img/skills/soft.svg';
import { ReactComponent as Tech } from '../../img/skills/tech.svg';

export const ListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  flex-wrap: wrap;

&.skill {
overflow-y: scroll;

height: calc(550px - 48px - 36px - 270px - 8px);

&::-webkit-scrollbar {
    display: none;
}
}
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const IconTech = styled(Tech)`
  width: 100px;
  height: auto;
`;

export const IconSoft = styled(Soft)`
  width: 100px;
  height: auto;
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
line-height: 1;

  margin-bottom: ${p => p.theme.space[3]}px;
  text-transform: capitalize;

  margin-top: auto;

  pointer-events: none;
`;
export const Img = styled.img`
  width: 152px;
  padding: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  /* width: calc((100% - ${p => p.theme.space[4]}px) / 2); */

  &:last-child {
    align-items: flex-start;
  }

  & > .skills {
    transition: all 200ms ease;
  }

  & .skills__icon {
    fill: ${p => p.theme.colors.deepsea};

    transition: all 200ms ease;
  }

  &.active .skills,
  &.active .skills__icon {
    color: ${p => p.theme.colors.seablue};
    fill: ${p => p.theme.colors.seablue};
  }
  &:hover:not(.active) .skills,
  &:hover:not(.active) .skills__icon {
    color: ${p => p.theme.colors.seablue};
    fill: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};

    transition: all 200ms ease;
  }
`;

export const LinkStyled = styled(Link)`
  display: block;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  width: 100%;
  border-bottom: ${p => p.theme.borders.deepsea};

  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;

  cursor: default;
`;

export const SpanBack = styled.span`
    font-size: ${p => p.theme.fontSizes.m};
line-height: 1;
  transition: all 200ms ease;
  :hover {
    cursor: pointer;

    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};

    transition: all 200ms ease;
  }
`;
