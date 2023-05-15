import styled from 'styled-components';
import { ReactComponent as Close } from '../../img/print/print_close.svg';
import { ReactComponent as Print } from '../../img/print/print_print.svg';

export const ModalContactsStyled = styled.div`
  position: relative;

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
  position: relative;

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

export const ButtonClose = styled(Close)`
  width: 64px;
  height: 64px;
  fill: ${p => p.theme.colors.deepseablue};
  filter: ${p => p.theme.shadows.svg};

  cursor: pointer;

  &:hover {
    fill: ${p => p.theme.colors.deepsea};
    text-shadow: ${p => p.theme.shadows.text};
  }
`;

export const ButtonPrint = styled(Print)`
  width: 64px;
  height: 64px;

  fill: ${p => p.theme.colors.deepseablue};
  filter: ${p => p.theme.shadows.svg};

  cursor: pointer;

  &:hover {
    fill: ${p => p.theme.colors.deepsea};
    text-shadow: ${p => p.theme.shadows.text};
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: ${p => p.theme.space[6]}px;
  right: ${p => p.theme.space[6]}px;

  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[5]}px;
`;

export const ButtonCloseContacts = styled(Close)`
  position: absolute;
  top: ${p => p.theme.space[4]}px;
  right: ${p => p.theme.space[4]}px;

  width: 32px;
  height: 32px;
  fill: ${p => p.theme.colors.deepsea};
  filter: ${p => p.theme.shadows.svg};

  cursor: pointer;

  &:hover {
    fill: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};
  }
`;
