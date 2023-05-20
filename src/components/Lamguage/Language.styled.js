import styled from 'styled-components';

export const SelectContainerLanguage = styled.fieldset`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;

  border: none;
  padding: 0;

  @media screen and (min-width: 768px) {
  }
`;

export const Label = styled.label`
  height: auto;

  &:last-child {
    border-top-right-radius: ${p => p.theme.space[4]}px;
    border-bottom-right-radius: ${p => p.theme.space[4]}px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  &:not(:last-child) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: ${p => p.theme.space[4]}px;
    border-bottom-left-radius: ${p => p.theme.space[4]}px;
  }

  color: ${p => p.theme.colors.deepseablue};
  border-color: transparent;
  background: ${p => p.theme.colors.deepsea};
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
    background: ${p => p.theme.colors.seablue};
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Label} {
    background: ${p => p.theme.colors.seablue};
  }
`;
