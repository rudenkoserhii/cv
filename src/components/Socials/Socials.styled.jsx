import styled from 'styled-components';

export const Img = styled.img`
  /* box-shadow: ${p => p.theme.shadows.text}; */
    /* fill: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};
    transition: all 200ms ease; */

`;

export const ListStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: ${p => p.theme.radii.round};

  transition: all 200ms ease;
  :hover,
  :focus {
  background-color: ${p => p.theme.colors.seablue};


    /* transform: scale(1.1); */

    transition: all 200ms ease;
  }
`;

export const LinkStyled = styled.a``;
