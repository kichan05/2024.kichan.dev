import styled, {css} from "styled-components";
import {CSSTransition} from "react-transition-group";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";
import {fadeIn, fadeOut, scaleDown, scaleUp} from "../style/animation";
import toss_qr_code from "./../assets/toss_qr_code.png"
import Button from "./Button";

const DonationModalStyle = styled.div`
  width: 100vw;
  height: calc(100 * var(--vh));

  background-color: rgba(0, 0, 0, 0.66);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: auto;
  
  transition: 260ms;

  animation-duration: 250ms;
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
  padding: 12px;
  border-radius: 12px;
  background-color: #fff;

  //display: flex;
  flex-direction: column;
  justify-content: center;

  .qr-code {
    width: 180px;
  }
  
  h3 {
    text-align: center;
  }
  
  button {
    width: 100%;
    margin-top: 20px;
  }
`

export const DonationModal = ({isShow}) => {
  const uiDispatch = useUiDispatch()
  const closeModal = (e) => {
    if (e.target !== e.currentTarget) {
      return
    }

    uiDispatch({type: UI_ACTION_TYPE.donation_modal_hide})
  }

  return (
    <CSSTransition in={isShow} timeout={250} unmountOnExit>
      {state =>
        <DonationModalStyle onClick={closeModal} state={state}>
          <ModalContent>
            <img className={"qr-code"} src={toss_qr_code} alt={"토스 송금하기 QR코드"}/>
            <h3>토스로 후원하기</h3>
            <Button onClick={closeModal}>닫기</Button>
          </ModalContent>
        </DonationModalStyle>
      }
    </CSSTransition>
  )
}