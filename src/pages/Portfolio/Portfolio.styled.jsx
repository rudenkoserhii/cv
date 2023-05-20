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

&:hover, &:focus {
    color: ${p => p.theme.colors.seablue};
    text-shadow: ${p => p.theme.shadows.text};
    transition: all 200ms ease;

}
  }
`;

export const ListTechStyled = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  flex-wrap: wrap;

background-color: ${p => p.theme.colors.seablue};
backdrop-filter: opacity(50%);

position: absolute;
top: 200%;
left: 0;
&.is-hidden {
display: none;
}
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
