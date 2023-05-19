import styled from 'styled-components';

export const Text = styled.p`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  text-indent: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;

  pointer-events: none;
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  width: 100%;

  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;

  display: block;

  pointer-events: none;

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
