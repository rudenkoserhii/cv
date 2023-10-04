import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  text-align: center;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  margin-bottom: ${p => p.theme.space[3]}px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.m};
    text-align: left;
  }
`;

export const Paragraph = styled.span`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  font-size: ${p => p.theme.fontSizes.xxs};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xxs};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xs};
    text-align: left;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    justify-content: center;
    gap: ${p => p.theme.space[4]}px;
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    /* justify-content: center; */
    gap: ${p => p.theme.space[3]}px;
    /* flex-direction: row; */
  }
`;

export const ListItem = styled.li`
  background-image: url(${p => p.logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  pointer-events: none;

  width: auto;

  @media screen and (min-width: 768px) {
    width: calc(
      (100% - ${p => p.theme.space[5]}px * 2 - ${p => p.theme.space[4]}px) / 2
    );
  }

  @media screen and (min-width: 1280px) {
    width: calc(
      (100% - ${p => p.theme.space[6]}px * 2 - ${p => p.theme.space[3]}px) / 2
    );
  }
`;
