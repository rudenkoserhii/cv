import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

flex-direction: column-reverse;

gap: ${p => p.theme.space[5]}px;
width: 100%;

  @media screen and (min-width: 1280px) {
  justify-content: space-around;
flex-direction: row;

gap: ${p => p.theme.space[0]}px;

  }
`;

export const LinkStyled = styled.a`
line-height: 1;
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};
    font-size: ${p => p.theme.fontSizes.xs};

  cursor: pointer;

  transition: all 200ms ease;
  :hover {
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};

    transition: all 200ms ease;
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
}


  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.m};
}

&.print {
    display: none;
  @media screen and (min-width: 1280px) {
display: block;
  }
}
`;
