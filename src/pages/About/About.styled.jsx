import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.xxs};
  text-align: center;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  text-indent: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;

  pointer-events: none;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.m};
    text-align: left;
  }
`;

export const Title = styled.h2`
  position: relative;

  font-size: ${p => p.theme.fontSizes.m};
  text-align: center;
  line-height: 1;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  width: 100%;

  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;

  display: block;

  pointer-events: none;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.ml};

    margin-bottom: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[4]}px;
  }

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.l};
    text-align: left;

    margin-bottom: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[3]}px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: ${p => p.theme.colors.deepsea};
  }
`;
