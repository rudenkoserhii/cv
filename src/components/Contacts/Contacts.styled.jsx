import styled from 'styled-components';

export const Link = styled.a`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};
  transition: all 200ms ease;

    font-size: ${p => p.theme.fontSizes.xxs};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.m};
  }


  :hover {
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};
    transition: all 200ms ease;
  }
`;

export const Gmail = styled.img`
width: 80px;
height: auto;

opacity: 0.5;
  @media screen and (min-width: 768px) {
width: 50px;
height: auto;
  }

  @media screen and (min-width: 1280px) {
width: 100px;
height: auto;
  }
`;

export const Messengers = styled.img`
width: 100px;
height: auto;
opacity: 0.5;
  @media screen and (min-width: 768px) {
width: 80px;
height: auto;
  }

  @media screen and (min-width: 1280px) {
width: 150px;
height: auto;
  }
`;
