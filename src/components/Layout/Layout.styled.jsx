import styled from 'styled-components';
import { ReactComponent as Burger } from '../../img/burger_menu/burger.svg';
import { ReactComponent as Close } from '../../img/burger_menu/close.svg';

export const WrapWhole = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 360px;
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
    max-width: 1200px;
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[4]}px;
  height: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const Header = styled.header`
display: none;

    flex-direction: row;
    justify-content: center;
    align-items: center;

position: absolute;
top: -${p => p.theme.space[5]}px;
left: 50%;
transform: translateX(-50%);

  width: 100%;

&.slide-in-blurred-top {
	-webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
	        animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
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

&.slide-out-blurred-top {
	-webkit-animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
	        animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
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

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
position: static;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

  max-height: calc(100vh - 18px - 64px * 2);
  margin-right: ${p => p.theme.space[6]}px;
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
  /* min-height: ${p => p.theme.space[6]}px; */

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

        /* padding-right: ${p => p.theme.space[4]}px; */
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

    /* position: absolute;
    top: 0;
    left: 320px; */
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
`;

export const ButtonClose = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  cursor: pointer;
  visibility: hidden;

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
`;
