import styled from "styled-components";
import edcanLogo from "./../assets/edcan.svg"
import edcanTypo from "./../assets/edcan_typo.svg"
import {SCoreDream} from "../style/Font";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";
import {v4} from "uuid";
import {color} from "../style/theme";

const BusinessCardStyle = styled.div`
  width: 300px;
  height: 490px;
  display: inline-block;

  position: relative;
  transition: transform 150ms;

  user-select: none;

  ${SCoreDream}
  * {
    font-family: S-CoreDream;

    position: relative;
    z-index: 2;
  }

  .front, .back {
    width: 100%;
    height: 100%;

    background-color: white;
    
    position: absolute;
    top: 0;
    left: 0;

    overflow: hidden;
    transition: transform 1s;
    backface-visibility: hidden;

    box-shadow: 0 2px 5px 1px rgba(185, 185, 185, 0.53);
  }

  .front {
    padding: 20px 16px 16px;
  }

  .circle {
    width: 500px;
    height: 500px;

    border-radius: 400px;
    background-color: rgba(0, 174, 201, 0.25);

    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(100px);
    z-index: 1;
  }

  .edcan-logo-wrap {
    text-align: right;
  }

  .edcan-logo-wrap img {
    width: 80px;
  }

  .name-wrap h2 {
    font-weight: 600;
    font-size: 22px;
  }

  .name-wrap h3 {
    font-weight: 300;
    font-size: 14px;
  }

  .content-wrap {
    margin-top: 24px;
    padding: 4px 8px;
    border-left: 3px solid #676767;
  }

  .content-wrap .title {
    font-size: 12px;
    font-weight: 500;
  }

  .content-wrap > div:not(:last-child) {
    margin-bottom: 16px;
  }

  .mail-content {
    cursor: pointer;
  }

  .content-wrap .content {
    font-size: 12px;
    margin-top: 4px;
  }

  .dots {
    padding: 50px 0;

    display: flex;
    flex-direction: row;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }

  .dot {
    width: 7px;
    height: 7px;
    background-color: #676767;
    border-radius: 100%;
  }

  .bottom {
    text-align: center;
  }

  .bottom img {
    width: 100px;
  }

  .back {
    display: flex;
    justify-content: center;
    align-items: center;

    transform: rotateY(180deg);
  }

  .back img {
    width: 170px;
  }

  .mouse-effect {
    width: 70px;
    aspect-ratio: 1/1;

    background: radial-gradient(circle, rgba(203, 203, 203, 0.3) 10%, rgba(203,203,203,0) 100%);
    box-shadow: 0px 0px 100px 1px rgba(255, 255, 255, 0.55);
    border-radius: 100%;

    filter: contrast(150%) blur(3px);

    position: absolute;
    transform: translate(-50%, -50%);

    pointer-events: none;
  }

  &.reverse .front {
    transform: rotateY(-180deg);
  }

  &.reverse .back {
    transform: rotateY(0deg);
  }
`

export const BusinessCard = ({onMouseMove, onMouseOut, cardState}) => {
  const uiDispatch = useUiDispatch()

  const cardStyle = {
    transform: `perspective(2000px) rotateX(${cardState.xDeg}deg) rotateY(${cardState.yDeg}deg)`
  };

  const mouseEffectStyle = {
    top: cardState.y,
    left: cardState.x
  }

  const onEmailCopy = () => {
    // uiDispatch({type: UI_ACTION_TYPE.donation_modal_show})
    navigator.clipboard.writeText("me@kichan.dev").then(() => {
      uiDispatch({
        type: UI_ACTION_TYPE.alert_message_add,
        message: {
          id: v4(),
          title: "메일 주소 복사 완료",
          message: "메일 주소를 복사했어요",
          color: color.Blue5,
        }
      })
    })
  }

  return (
    <BusinessCardStyle
      style={cardStyle}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      className={cardState.isReverse && 'reverse'}>
      <div className="front">
        <div className="edcan-logo-wrap">
          <img src={edcanLogo} alt="EDCAN 로고"/>
        </div>
        <div className="name-wrap">
          <h2>박희찬</h2>
          <h3>Developer</h3>
        </div>
        <div className="content-wrap">
          <div className="tel-wrap">
            <div className="tel-title title">학력</div>
            <div className="tel-content content">선린인터넷고등학교</div>
            <div className="tel-content content">소프트웨어과 졸업 (2021~2023)</div>
          </div>
          <div className="mail-wrap">
            <div className="mail-title title">
              MAIL
            </div>
            <div className="mail-content content">
              <span className="pointer" onClick={onEmailCopy}>me@kichan.dev</span>
            </div>
          </div>
          <div className="link-wrap">
            <div className="link-title title">GITHUB</div>
            <div className="link-content content">
              <a href="https://www.github.com/kichan05" target="_blank">github.com/kichan05</a>
            </div>
          </div>
        </div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="bottom">
          <img src={edcanTypo} alt=""/>
        </div>
        <div className="circle"></div>
        <div
          className="mouse-effect"
          style={mouseEffectStyle}></div>
      </div>
      <div className="back">
        <img src={edcanTypo} alt="EDCAN 로고"/>
        <div
          className="mouse-effect"
          style={mouseEffectStyle}></div>
      </div>
    </BusinessCardStyle>
  )
}