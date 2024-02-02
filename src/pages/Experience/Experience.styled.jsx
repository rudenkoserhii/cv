import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListItem = styled.li`
  position: relative;
  width: calc((100% - ${p => p.theme.space[2]}px * 3) / 4);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: calc(
      (100% - ${p => p.theme.space[5]}px * 2 - ${p => p.theme.space[2]}px * 3) /
        4
    );
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[2]}px;
  flex-direction: row;

  @media screen and (min-width: 1280px) {
    justify-content: center;
    gap: ${p => p.theme.space[2]}px;
    flex-direction: row;
    flex-wrap: nowrap;
  }
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
  font-size: ${p => p.theme.fontSizes.xs};
  text-align: center;
  line-height: 1;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  text-transform: capitalize;
  font-weight: ${p => p.theme.fontWeights.bold};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.m};
    text-align: left;
  }
`;

export const Img = styled.img`
  display: block;
`;
