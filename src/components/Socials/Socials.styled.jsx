import styled from 'styled-components';

export const Img = styled.img`
`;

export const ListStyled = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
gap: ${p => p.theme.space[5]}px;
`;

export const ListItem = styled.li`
width: 100%;
height: 100%;
box-shadow: ${p => p.theme.shadows.second};
border-radius: ${p => p.theme.radii.round};
background-color: ${p => p.theme.colors.seablue};

:hover, :focus {box-shadow: ${p => p.theme.shadows.third};}

`;

export const LinkStyled = styled.a`

`;
