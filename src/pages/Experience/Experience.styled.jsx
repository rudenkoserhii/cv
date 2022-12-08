import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListItem = styled.li`
`;

export const ListStyled = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;

`;

export const LinkStyled = styled(NavLink)`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;

  &.active .companyName{
    color: ${p => p.theme.colors.seablue};}
  :hover:not(.active) .companyName{
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};}


`;

export const Text = styled.p`
    color: ${p => p.theme.colors.deepsea};
    text-shadow: ${p => p.theme.shadows.first};

    text-transform: capitalize;
    font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Img = styled.img`
`;

export const Title = styled.h2`
    color: ${p => p.theme.colors.deepsea};
    text-shadow: ${p => p.theme.shadows.first};

    width: 100%;
    border-bottom: ${p => p.theme.borders.deepsea};

    margin-bottom: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[3]}px;

    display: block;
`;
