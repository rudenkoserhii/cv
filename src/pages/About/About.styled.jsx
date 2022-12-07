import styled from 'styled-components';

export const Text = styled.p`
    color: ${p => p.theme.colors.deepsea};
    text-shadow: ${p => p.theme.shadows.first};
`;

export const Title = styled.h2`
    color: ${p => p.theme.colors.deepsea};
    text-shadow: ${p => p.theme.shadows.first};

    width: 100%;
    border-bottom: ${p => p.theme.borders.deepsea};

    margin-bottom: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[3]}px;
`;
