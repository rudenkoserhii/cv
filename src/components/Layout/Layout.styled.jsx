import styled from 'styled-components';

export const WrapWhole = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 360px;
margin-left: auto;
margin-right: auto;
padding: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
width: 768px;
padding: ${p => p.theme.space[5]}px;

  }

  @media screen and (min-width: 1280px) {
width: 1200px;
padding: ${p => p.theme.space[6]}px;

  }
`;

export const Wrap = styled.div`
          display: flex;
flex-direction: column;
margin-bottom: ${p => p.theme.space[4]}px;
min-height: 600px;
position: relative;

  @media screen and (min-width: 768px) {
margin-bottom: ${p => p.theme.space[5]}px;
  }

  @media screen and (min-width: 1280px) {
flex-direction: row;
margin-bottom: ${p => p.theme.space[6]}px;
  }
`;


export const Header = styled.header`
display: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  width: ${p => p.theme.space[8]}px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  }
`;

export const Name = styled.h1`
  display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;

text-align: center;
white-space: nowrap;

  color: ${p => p.theme.colors.deepsea};
  text-shadow: ${p => p.theme.shadows.first};

  pointer-events: none;

  font-size: 44px;
  /* min-height: ${p => p.theme.space[6]}px; */

  -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;

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
    &::after {
      @media screen and (min-width: 768px) {
      }

      @media screen and (min-width: 1280px) {
      content: '';
      position: absolute;

      top: 0px;
      right: -5px;
      width: 5px;
      height: 100%;
      background-color: ${p => p.theme.colors.deepsea};

        padding-right: ${p => p.theme.space[4]}px;
      }
    }
  }

& > .secondName {
  font-size: 40px;

      @media screen and (min-width: 768px) {
  font-size: 32px;
      }

      @media screen and (min-width: 1280px) {
  font-size: 50px;
      }
    }

  @media screen and (min-width: 768px) {
  font-size: 36px;

  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    align-items: baseline;
flex-direction: row;
    gap: calc(${p => p.theme.space[4]}px + 5px);

  font-size: 50px;


    position: absolute;
    top: 0;
    left: 320px;
  }
`;
