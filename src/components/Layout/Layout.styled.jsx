import styled from 'styled-components';
import { ReactComponent as Burger } from '../../img/burger_menu/burger.svg';
import { ReactComponent as Close } from '../../img/burger_menu/close.svg';

export const WrapWhole = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  max-height: 100dvh;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
  height: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.space[5]}px;
    margin-top: ${p => p.theme.space[5]}px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  visibility: hidden;

  position: absolute;
  top: -${p => p.theme.space[4]}px;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: 350px;

  @media screen and (min-width: 768px) {
    top: -${p => p.theme.space[5]}px;
  }

  &.trueExpanded.slide-in-blurred-top {
    -webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1)
      both;
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
    @media screen and (min-width: 1280px) {
      animation: none;
    }
  }

  &.falseExpanded.slide-out-blurred-top {
    -webkit-animation: slide-out-blurred-top 0.45s
      cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
    animation: slide-out-blurred-top 0.45s
      cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
    @media screen and (min-width: 1280px) {
      animation: none;
    }
  }

  @media screen and (min-width: 1280px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1280px) {
    max-width: none;
    visibility: visible;

    position: static;

    flex-direction: column;
    justify-content: flex-start;

    transform: translateX(0);

    width: ${p => p.theme.space[7]}px;

    max-height: calc(100dvh - 18px - 64px * 2);
    margin-right: ${p => p.theme.space[6]}px;
  }

  &.falseExpanded {
    visibility: hidden;

    @media screen and (min-width: 1280px) {
      visibility: visible;
      display: flex;
    }
  }

  &.trueExpanded {
    visibility: visible;

    @media screen and (min-width: 1280px) {
      visibility: visible;
      display: flex;
    }
  }
  @-webkit-keyframes slide-in-blurred-top {
    0% {
      -webkit-transform: translate(-50%, -1000px) scaleY(2.5) scaleX(0.2);
      transform: translate(-50%, -1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, 0) scaleY(1) scaleX(1);
      transform: translate(-50%, 0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-blurred-top {
    0% {
      -webkit-transform: translate(-50%, -1000px) scaleY(2.5) scaleX(0.2);
      transform: translate(-50%, -1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(-50%, 0) scaleY(1) scaleX(1);
      transform: translate(-50%, 0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @-webkit-keyframes slide-out-blurred-top {
    0% {
      -webkit-transform: translate(-50%, 0) scaleY(1) scaleX(1);
      transform: translate(-50%, 0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(-50%, -1000px) scaleY(2) scaleX(0.2);
      transform: translate(-50%, -1000px) scaleY(2) scaleX(0.2);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
  }
  @keyframes slide-out-blurred-top {
    0% {
      -webkit-transform: translate(-50%, 0) scaleY(1) scaleX(1);
      transform: translate(-50%, 0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(-50%, -1000px) scaleY(2) scaleX(0.2);
      transform: translate(-50%, -1000px) scaleY(2) scaleX(0.2);
      -webkit-transform-origin: 50% 0%;
      transform-origin: 50% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
  }
`;

export const Name = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
  white-space: nowrap;
  line-height: 1;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  pointer-events: none;

  font-size: 44px;

  -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

  & > .firstName {
    position: relative;
    &::after {
      @media screen and (min-width: 768px) {
      }

      @media screen and (min-width: 1280px) {
        content: '';
        position: absolute;

        top: 0px;
        right: -13px;
        width: 5px;
        height: 100%;
        background-color: ${p => p.theme.colors.deepsea};
      }
    }
  }

  & > .secondName {
    font-size: 40px;

    @media screen and (min-width: 768px) {
      font-size: 32px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 50px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    align-items: baseline;
    flex-direction: row;
    gap: calc(${p => p.theme.space[4]}px + 5px);

    font-size: 50px;
  }
`;

export const IconBurger = styled(Burger)`
  filter: ${p => p.theme.shadows.svg};
  fill: ${p => p.theme.colors.deepsea};

  transition: all 200ms ease;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const IconClose = styled(Close)`
  & path {
    stroke: ${p => p.theme.colors.deepsea};
    filter: ${p => p.theme.shadows.svg};

    transition: all 200ms ease;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const ButtonBurger = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  cursor: pointer;

  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }

  &:hover ${IconBurger}, :focus ${IconBurger} {
    fill: ${p => p.theme.colors.seablue};
    transition: all 200ms ease;
  }

  &.falseExpanded {
    display: flex;

    @media screen and (min-width: 1280px) {
      display: none;
    }
  }

  &.trueExpanded {
    display: none;

    @media screen and (min-width: 1280px) {
      display: none;
    }
  }
`;

export const ButtonClose = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: none;

  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }

  &:hover ${IconClose} path,
  :focus ${IconClose} path {
    stroke: ${p => p.theme.colors.seablue};
    transition: all 200ms ease;
  }

  &.falseExpanded {
    display: flex;

    @media screen and (min-width: 1280px) {
      display: none;
    }
  }

  &.trueExpanded {
    display: none;

    @media screen and (min-width: 1280px) {
      display: none;
    }
  }
`;

export const Div = styled.div`
  position: relative;
  height: ${p => p.theme.space[6]}px;
  width: auto;
  margin-top: ${p => p.theme.space[5]}px;

  @media screen and (min-width: 768px) {
    height: ${p => p.theme.space[6]}px;
  }

  @media screen and (min-width: 1280px) {
    height: auto;
  }
`;
