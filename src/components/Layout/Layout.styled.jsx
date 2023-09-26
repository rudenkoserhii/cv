import styled from 'styled-components';

export const Header = styled.header`
  width: ${p => p.theme.space[8]}px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Name = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: calc(${p => p.theme.space[4]}px + 5px);

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  pointer-events: none;

  position: absolute;
  top: 0;
  left: 320px;

  font-size: 50px;
  min-height: ${p => p.theme.space[6]}px;

-webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;

@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

  & > .firstName {
    position: relative;
    padding-right: ${p => p.theme.space[4]}px;
    &::after {
      content: '';
      position: absolute;

      top: 0px;
      right: -5px;
      width: 5px;
      height: 100%;
      background-color: ${p => p.theme.colors.deepsea};
    }
  }
`;
