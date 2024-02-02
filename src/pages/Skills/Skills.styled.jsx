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
    position: relative;
    overflow-y: scroll;

    height: calc(100vh - 650px);

    @media screen and (min-width: 768px) {
      height: calc(100vh - 650px);
    }

    @media screen and (min-width: 1280px) {
      height: calc(550px - 36px - 209px - 48px);
    }

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
  width: auto;
  height: 130px;

  @media screen and (min-width: 768px) {
    height: 130px;
  }

  @media screen and (min-width: 1280px) {
    width: 100px;
    height: auto;
  }
`;

export const IconSoft = styled(Soft)`
  width: auto;
  height: 130px;

  @media screen and (min-width: 768px) {
    height: 130px;
  }

  @media screen and (min-width: 1280px) {
    width: 100px;
    height: auto;
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1;

  margin-bottom: ${p => p.theme.space[4]}px;
  text-transform: capitalize;

  margin-top: auto;

  pointer-events: none;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.m};
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
export const Img = styled.img`
  height: 50px;
  width: auto;
  padding-left: 25px;
  padding-right: 25px;

  @media screen and (min-width: 768px) {
    height: 60px;
    padding: 15px;
  }

  @media screen and (min-width: 1280px) {
    height: 150px;
    padding: 20px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

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

  &.active {
    pointer-events: none;
  }
`;

export const LinkStyled = styled(Link)`
  display: block;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  width: 100%;
  height: fit-content;
  padding: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;

  cursor: default;
  text-align: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: ${p => p.theme.colors.deepsea};
  }

  @media screen and (min-width: 1280px) {
    text-align: left;
  }
`;

export const SpanBack = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1;
  transition: all 200ms ease;

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.m};
  }

  :hover {
    cursor: pointer;

    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};

    transition: all 200ms ease;
  }
`;
