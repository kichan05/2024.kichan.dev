import styled, {css} from "styled-components";
import Button from "./Button";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";
import {CSSTransition} from "react-transition-group";
import {fadeIn, fadeOut, scaleDown, scaleUp} from "../style/animation";

const ModalStyle = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);

  pointer-events: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  animation-duration: ${p=> p.timeout}ms;
  animation-timing-function: ease-out;
  ${({state}) => css`
    ${state === "entering" && css`
      animation-name: ${fadeIn};
    `}
    ${state === "exiting" && css`
      animation-name: ${fadeOut};
    `}
  `}
`

const ModalContent = styled.div`
  width: 100%;
  max-width: 600px;

  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  
  animation-duration: ${p=> p.timeout}ms;
  animation-timing-function: ease-out;
  ${({state}) => css`
    ${state === "entering" && css`
      animation-name: ${scaleUp};
    `}
    ${state === "exiting" && css`
      animation-name: ${scaleDown};
    `}
  `}
`

const Modal = ({isShow}) => {
  const uiDispatch = useUiDispatch()

  const closeModal = (e) => {
    if(e.target !== e.currentTarget)
      return

    uiDispatch({type: UI_ACTION_TYPE.modal_hide})
  }

  return (
    <CSSTransition in={isShow} timeout={250} unmountOnExit>
      {state => (
        <ModalStyle onClick={closeModal} state={state} timeout={250}>
          <ModalContent>
            <Button onClick={closeModal}>닫기</Button>
          </ModalContent>
        </ModalStyle>
      )}
    </CSSTransition>
  )
}

Modal.defaultProps = {
  isShow: false
}

export default Modal