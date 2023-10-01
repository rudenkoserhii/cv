import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListItem = styled.li`
  position: relative;

  &:not(:last-child)::after {
    content: '';
    width: 4px;
    height: 4px;

    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);

    border-radius: 50%;

    background-color: ${p => p.theme.colors.deepsea};
    @media screen and (min-width: 1280px) {
      display: none;
    }
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${p => p.theme.space[5]}px;

  @media screen and (min-width: 1280px) {
    justify-content: center;
    gap: ${p => p.theme.space[2]}px;
    flex-direction: row;
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
  font-size: ${p => p.theme.fontSizes.xxs};
  text-align: center;

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
  width: 100px;
  height: 100px;

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media screen and (min-width: 1280px) {
    width: 160px;
    height: 160px;
  }
`;
