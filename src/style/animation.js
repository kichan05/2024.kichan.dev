import {keyframes} from "styled-components";

export const showLeft = keyframes`
  from {
    transform: translateX(-70%) scaleY(0.5);
    opacity: 0;
  }
  to {
    transform: translateX(0) scaleY(1);
    opacity: 1;
  }
`

export const showRight = keyframes`
  from {
    transform: translateX(70%) scaleY(0.5);
    opacity: 0;
  }
  to {
    transform: translateX(0) scaleY(1);
    opacity: 1;
  }
`

export const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
`

export const downUp = keyframes`
  0%, 100% {
    transform: translate(-50%, 0px);
  }
  50% {
    transform: translate(-50%, 40px);
  }
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

export const scaleUp = keyframes`
  0% {
    transform: scale(0.975);
  }
  
  100% {
    transform: scale(1);
  }
`

export const scaleDown = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.975);
  }
`