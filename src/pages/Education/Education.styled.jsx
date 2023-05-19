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

  pointer-events: none;
`;
