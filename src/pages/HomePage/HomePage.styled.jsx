import styled from 'styled-components';

export const Img = styled.img`

width: auto;
max-height: calc(100vh - (${p => p.theme.space[8]}px + 30px));
`;
