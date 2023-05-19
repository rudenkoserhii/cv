import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListItem = styled.li``;

export const ListStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  & > .companyName {
    transition: all 200ms ease;
  }

  &.active {
    pointer-events: none;
    & .companyName {
      color: ${p => p.theme.colors.seablue};
    }
  }
  &:hover:not(.active) .companyName {
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};

    transition: all 200ms ease;
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  text-transform: capitalize;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Img = styled.img``;

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
