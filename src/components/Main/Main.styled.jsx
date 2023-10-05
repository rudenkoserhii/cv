import styled from 'styled-components';
import flag from '../../img/about/flag.png';

export const SectionStyled = styled.section`
  position: relative;

  width: 100%;
  height: 100%;
  padding-bottom: 0;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 800px;
  }

  &.flag {
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
  }
`;

export const MainStyled = styled.main`
  width: 350px;
  height: 400px;
  @media screen and (min-width: 768px) {
    width: 600px;
    height: 500px;
  }
  @media screen and (min-width: 1280px) {
    width: 650px;
    height: 550px;
  }
`;
