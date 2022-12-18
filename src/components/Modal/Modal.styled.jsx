import styled from 'styled-components';

export const ModalContactsStyled = styled.div`

    width: ${p => p.theme.space[8]}px;
    height: ${p => p.theme.space[8]}px;

    background-color: ${p => p.theme.colors.deepseablue};
    box-shadow: ${p => p.theme.shadows.first};
    border-radius: ${p => p.theme.radii.normal};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${p => p.theme.space[5]}px;


`;

export const Overlay = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`;

export const ModalPrintStyled = styled.div`

    width: 100%;
    height: 100%;

    padding: ${p => p.theme.space[5]}px;

    overflow: scroll;

    background-color: ${p => p.theme.colors.deepseablue};
    box-shadow: ${p => p.theme.shadows.first};
    border-radius: ${p => p.theme.radii.normal};

    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: ${p => p.theme.space[5]}px;


`;
