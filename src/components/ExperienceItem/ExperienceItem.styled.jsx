import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowSvg } from '../../img/arrows/arrow-down.svg';

export const LinkBack = styled(Link)`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  width: 100%;

  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;

  pointer-events: auto;

  cursor: default;

  display: inline-block;
  & span {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1;

    @media screen and (min-width: 1280px) {
      font-size: ${p => p.theme.fontSizes.m};
    }
  }

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

export const Arrow = styled(ArrowSvg)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 40px;
  height: 40px;

  fill: ${p => p.theme.colors.seablue};

  -webkit-animation: slide-in-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    infinite both;
  animation: slide-in-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both;

  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-10px) translateX(-50%);
      transform: translateY(-10px) translateX(-50%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(20px) translateX(-50%);
      transform: translateY(20px) translateX(-50%);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-10px) translateX(-50%);
      transform: translateY(-10px) translateX(-50%);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(20px) translateX(-50%);
      transform: translateY(20px) translateX(-50%);
      opacity: 1;
    }
  }
`;

export const Div = styled.div`
  position: relative;
  pointer-events: auto;
  overflow-y: scroll;

  height: calc(100dvh - 560px);

  @media screen and (min-width: 768px) {
    height: calc(100dvh - 580px);
  }

  @media screen and (min-width: 1280px) {
    height: calc(100dvh - 400px);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Span = styled.span`
  pointer-events: none;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  margin-bottom: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.xxs};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const Text = styled.p`
  pointer-events: none;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.xs};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.m};
    text-align: left;
  }
`;

export const List = styled.ul`
  pointer-events: none;
  padding: ${p => p.theme.space[3]}px;
  list-style-position: inside;
  list-style: square;
`;

export const Item = styled.li`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  margin-bottom: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.xs};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.m};
    text-align: left;
  }
`;
