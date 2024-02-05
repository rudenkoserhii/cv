import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  flex-wrap: wrap;

  position: relative;
  overflow-y: scroll;

  height: calc(100dvh - 450px);

  @media screen and (min-width: 768px) {
    height: calc(100dvh - 440px);
  }

  @media screen and (min-width: 1280px) {
    height: 502px;
    justify-content: flex-start;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListItem = styled.li`
  width: fit-content;

  padding: ${p => p.theme.space[3]}px;

  @media screen and (min-width: 768px) {
    width: calc((100% - ${p => p.theme.space[3]}px) / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 3 * ${p => p.theme.space[3]}px) / 4);
  }
`;

export const LinkStyled = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  flex-wrap: nowrap;

  margin-bottom: ${p => p.theme.space[3]}px;

  & .portfolioName,
  & .portfolioImg {
    transition: all 200ms ease;
  }

  &:hover .portfolioName {
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};

    transition: all 200ms ease;
  }
  &:hover .portfolioImg {
    transform: scale(1.05);

    transition: all 200ms ease;
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  font-weight: ${p => p.theme.fontWeights.bold};

  text-align: center;

  &.portfolioProduction {
    margin-bottom: ${p => p.theme.space[3]}px;

    font-size: ${p => p.theme.fontSizes.s};
  }

  &.portfolioStack {
    position: relative;

    cursor: pointer;

    font-size: ${p => p.theme.fontSizes.xs};

    transition: all 200ms ease;

    &:hover,
    &:focus {
      color: ${p => p.theme.colors.seablue};
      text-shadow: ${p => p.theme.shadows.text};
      transition: all 200ms ease;
    }
  }
`;

export const ListTechStyled = styled.ul`
  visibility: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  flex-wrap: wrap;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.space[3]}px;

  box-shadow: 0px 0px 10px 10px ${p => p.theme.colors.seablue};

  background-color: ${p => p.theme.colors.seablue};
  backdrop-filter: opacity(50%);

  position: absolute;
  top: 200%;
  left: 0;

  z-index: 5;
`;

export const ListItemTechStyled = styled.li`
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
    &::before {
      content: '';
      position: absolute;

      top: 0px;
      right: -10px;
      width: 1px;
      height: 100%;
      background-color: ${p => p.theme.colors.deepsea};
    }
  }
`;

export const TextTech = styled.p`
  color: ${p => p.theme.colors.deepseablue};
  text-shadow: ${p => p.theme.shadows.first};

  font-size: ${p => p.theme.fontSizes.xs};
`;
