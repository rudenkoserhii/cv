import styled from 'styled-components';

export const Text = styled.p`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Paragraph = styled.span`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  font-size: ${p => p.theme.fontSizes.xs};
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  width: 100%;

  margin-bottom: ${p => p.theme.space[4]}px;
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

export const ListStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const ListItem = styled.li`
  width: calc(
    (800px - ${p => p.theme.space[6]}px * 2 - ${p => p.theme.space[3]}px) / 3
  );
`;
