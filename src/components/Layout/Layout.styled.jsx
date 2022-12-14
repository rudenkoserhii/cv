import styled from 'styled-components';

export const Header = styled.header`
    width: ${p => p.theme.space[8]}px;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`;

export const Name = styled.h1`
    color: ${p => p.theme.colors.deepsea};
    text-shadow: ${p => p.theme.shadows.first};

    position: absolute;
    top: 0;
    left: 320px;

    font-size: 50px;

`;


