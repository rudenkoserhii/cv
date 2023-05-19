import styled from 'styled-components';

export const Link = styled.a`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};
  transition: all 200ms ease;

  :hover {
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};
    transition: all 200ms ease;
  }
`;
