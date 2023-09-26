import styled from 'styled-components';

export const Img = styled.img`
position: absolute;
right: 0;
top: 64px;
z-index:-9;

width: 800px;
height: 600px;

object-fit: contain;

  -webkit-animation: first 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation: first 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;

@-webkit-keyframes first {
  0% {
    -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
    transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes first {
  0% {
    -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-filter: blur(40px);
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
    transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1;
  }
}

`;

export const Cards = styled.div`
position: absolute;
right: 0;
top: 64px;
z-index: 11;

display: flex;
justify-content: center;
align-items: center;

flex-wrap: wrap;

	-webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
	        animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;

@-webkit-keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
`;

export const Card = styled.div`
/* position: absolute;
left: 0;
top: 0; */
cursor: pointer;

width: 200px;
height: 200px;

max-width: 200px;
background-color: ${p => p.theme.colors.deepsea};
opacity: 0.8;
filter: blur(2px);

&:hover, &:focus {
background-color: ${p => p.theme.colors.seablue};


	-webkit-animation: wobble-hor-top 0.8s both;
	        animation: wobble-hor-top 0.8s both;

@-webkit-keyframes wobble-hor-top {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(6deg);
            transform: translateX(-30px) rotate(6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(-6deg);
            transform: translateX(15px) rotate(-6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(3.6deg);
            transform: translateX(-15px) rotate(3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(-2.4deg);
            transform: translateX(9px) rotate(-2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(1.2deg);
            transform: translateX(-6px) rotate(1.2deg);
  }
}
@keyframes wobble-hor-top {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(6deg);
            transform: translateX(-30px) rotate(6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(-6deg);
            transform: translateX(15px) rotate(-6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(3.6deg);
            transform: translateX(-15px) rotate(3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(-2.4deg);
            transform: translateX(9px) rotate(-2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(1.2deg);
            transform: translateX(-6px) rotate(1.2deg);
  }
}
}

@-webkit-keyframes swirl-out-bck {
  0% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
}
@keyframes swirl-out-bck {
  0% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
}

&.swirl-out-bck {
	-webkit-animation: swirl-out-bck 0.6s ease-in both;
	        animation: swirl-out-bck 0.6s ease-in both;
}
`;

