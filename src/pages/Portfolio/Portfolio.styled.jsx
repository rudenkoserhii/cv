import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${p => p.theme.space[3]}px;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: calc((100% - 3 * ${p => p.theme.space[3]}px) / 4);

  padding: ${p => p.theme.space[3]}px;
`;

export const LinkStyled = styled.a`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  flex-wrap: nowrap;

  & .portfolioName,
  & .portfolioText,
  & .portfolioImg {
    transition: all 200ms ease;
  }

  &:hover .portfolioName,
  &:hover .portfolioText {
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};

    transition: all 200ms ease;
  }
  &:hover .portfolioImg {
    transform: scale(1.05);

    transition: all 200ms ease;
  }
`;

export const Title = styled.h2`
  position: relative;
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  width: 100%;

  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;

  display: block;

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;

    width: 100%;
    height: 1px;

    background-color: ${p => p.theme.colors.deepsea};
  }
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  font-weight: ${p => p.theme.fontWeights.bold};

  text-align: center;
`;

export const ListTechStyled = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  flex-wrap: wrap;
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
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  font-size: ${p => p.theme.fontSizes.xs};
`;
