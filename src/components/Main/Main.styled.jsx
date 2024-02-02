import styled from 'styled-components';
// import flag from '../../img/about/flag.png';

export const SectionStyled = styled.section`
  position: relative;

  width: 100%;
  max-height: calc(100dvh - 400px);
  padding-bottom: 0;

  @media screen and (min-width: 768px) {
    max-width: 600px;
    max-height: calc(100dvh - 390px);
  }
  @media screen and (min-width: 1280px) {
    max-width: 800px;
    max-height: calc(100dvh - 200px);
  }
`;
/* &.flag {
    background-image: url(${flag});
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;

    transition: all 200ms ease;

    @media screen and (min-width: 768px) {
      background-size: contain;
    }
    @media screen and (min-width: 1280px) {
      background-size: cover;
    }
  } */

export const MainStyled = styled.main`
  width: calc(100vw - 64px);
  height: calc(100dvh - 400px);
  @media screen and (min-width: 768px) {
    width: 600px;
    height: calc(100dvh - 390px);
  }
  @media screen and (min-width: 1280px) {
    width: 650px;
    height: calc(100dvh - 200px);
  }
`;
