import { NavLink, Link } from 'react-router-dom';

import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[3]}px;
  text-transform: capitalize;

  margin-top: auto;
`;
export const Img = styled.img`
  width: 152px;
  padding: 20px;
`;


export const NavLinkStyled = styled(NavLink)`
& > .skills {
    transition: all 200ms ease;
}

  &.active .skills {
    color: ${p => p.theme.colors.seablue};
  }
  &:hover:not(.active) .skills {
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};

    transition: all 200ms ease;
  }
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  width: 100%;

  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;

  display: block;

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;

    width: 100%;
    height: 1px;

    background-color: ${p => p.theme.colors.deepsea};
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

  transition: all 200ms ease;
  :hover {
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};

  transition: all 200ms ease;
  }


`;
