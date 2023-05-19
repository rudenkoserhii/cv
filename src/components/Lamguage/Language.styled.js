import styled from 'styled-components';

export const SelectContainerLanguage = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 140px;
  height: auto;

  background-color: transparent;

  border-color: ${props => props.theme.logout};
  background: ${props => props.theme.mainBg};

  @media screen and (min-width: 768px) {
    left: 165px;
  }
`;

export const SelectLanguage = styled.select`
  width: auto;
  height: auto;
  border-radius: 5px;
  color: ${props => props.theme.black};
  border-color: transparent;
  background: ${props => props.theme.mainBg};
  padding: 3px;
  cursor: pointer;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.01em;
  text-decoration: none;
  transition: all 0.25s ease-in;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }

  &:focus,
  &:hover,
  &:focus-visible {
    border-color: ${props => props.theme.orangeLight};
  }
  &.active {
    color: ${props => props.theme.orangeLight};
    text-decoration: underline;
  }
`;