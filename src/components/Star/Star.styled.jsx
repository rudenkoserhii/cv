import styled from 'styled-components';

export const StarStyled = styled.div`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;

  transform: rotate(${p => p.rotate}deg);
`;

export const StarStyledHorisontal = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: ${p => p.size / 3}px;
  height: ${p => p.size / 3}px;

  border-radius: 50%;

  background-color: ${p => p.theme.colors.seablue};
  box-shadow: 0px 0px ${p => p.size / 3}px ${p => p.size / 3}px
    ${p => p.theme.colors.seablue};

  -webkit-animation: scale-in-center-horisontal ${p => p.size * 2}s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both;
  animation: scale-in-center-horisontal ${p => p.size * 2}s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both;

  @-webkit-keyframes scale-in-center-horisontal {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    50% {
      -webkit-transform: scale(${p => p.size}, 1);
      transform: scale(${p => p.size}, 1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
  }
  @keyframes scale-in-center-horisontal {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    50% {
      -webkit-transform: scale(${p => p.size}, 1);
      transform: scale(${p => p.size}, 1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
  }
`;

export const StarStyledVertical = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: ${p => p.size / 3}px;
  height: ${p => p.size / 3}px;

  border-radius: 50%;

  background-color: ${p => p.theme.colors.seablue};
  box-shadow: 0px 0px ${p => p.size / 3}px ${p => p.size / 3}px
    ${p => p.theme.colors.seablue};

  -webkit-animation: scale-in-center-vertical ${p => p.size * 2}s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both;
  animation: scale-in-center-vertical ${p => p.size * 2}s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite both;

  @-webkit-keyframes scale-in-center-vertical {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    50% {
      -webkit-transform: scale(1, ${p => p.size});
      transform: scale(1, ${p => p.size});
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
  }
  @keyframes scale-in-center-vertical {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    50% {
      -webkit-transform: scale(1, ${p => p.size});
      transform: scale(1, ${p => p.size});
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
  }
`;
