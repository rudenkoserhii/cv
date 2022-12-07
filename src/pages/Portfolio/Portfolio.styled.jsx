import styled from 'styled-components';

export const ListStyled = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: ${p => p.theme.space[3]}px;

`;

export const ListItem = styled.li`
`;

export const LinkStyled = styled.a`
  :hover .portfolioName{
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};}

`;

export const Title = styled.h2`
    color: ${p => p.theme.colors.deepsea};
    text-shadow: ${p => p.theme.shadows.first};

    width: 100%;
    border-bottom: ${p => p.theme.borders.deepsea};

    margin-bottom: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[3]}px;

`;

export const Text = styled.p`
    color: ${p => p.theme.colors.deepsea};
    text-shadow: ${p => p.theme.shadows.first};

    font-weight: ${p => p.theme.fontWeights.bold};
    margin-bottom: ${p => p.theme.space[3]}px;

`;