import styled from 'styled-components';

export const SelectContainerLanguage = styled.fieldset`
  justify-content: center;
  align-items: center;
  gap: 1px;

  border: none;
  padding: 0;
  margin: 0;

  height: 35px;

  &.appbar {
    display: none;
    @media screen and (min-width: 1280px) {
      display: flex;
    }
  }

  &.footer {
    display: flex;
    @media screen and (min-width: 1280px) {
      display: none;
    }
  }
`;

export const Label = styled.label`
  height: auto;

  color: ${p => p.theme.colors.deepsea};
  border-color: transparent;

  padding: ${p => p.theme.space[3]}px;
  cursor: pointer;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  transition: all 200ms ease;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }

  &:focus,
  &:hover,
  &:focus-visible {
    color: ${p => p.theme.colors.seablue};
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Label} {
    color: ${p => p.theme.colors.seablue};
    pointer-events: none;
  }
`;
