import styled from "styled-components";
import {downUp, showLeft, animation, showRight} from "../style/animation";
import {GoChevronDown} from "react-icons/go";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";

const FirstSectionStyle = styled.section`
  width: 100%;
  height: calc(var(--vh) * 100);

  background: rgb(76, 45, 254);
  background: linear-gradient(120deg, #826fed 17%, #1f52ff 100%);

  position: relative;

  .title-wrap {
    color: ${p => p.theme.color.Gray0};
    font-size: 1.9rem;
    text-align: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    *::selection {
      background-color: rgba(0, 0, 0, 0.16);
    }
  }

  .title1 {
    font-size: 1.5em;

    animation-name: ${showLeft};
    animation-delay: 300ms;
    animation-duration: 800ms;
    animation-fill-mode: backwards;
  }

  .title2 {
    font-size: 2em;
    margin: 8px 0;

    animation-name: ${showRight};
    animation-delay: 1000ms;
    animation-duration: 800ms;
    animation-fill-mode: backwards;
  }

  .title3 {
    font-size: 1.5em;

    animation-name: ${showLeft};
    animation-delay: 1700ms;
    animation-duration: 800ms;
    animation-fill-mode: backwards;
  }

  .message {
    font-size: 0.6em;

    margin-top: 12px;
    line-height: 24px;

    animation-name: ${animation};
    animation-duration: 1200ms;
    animation-delay: 2700ms;
    animation-fill-mode: backwards;

    word-break: keep-all;
  }

  .link {
    margin-top: 10px;

    animation-name: ${animation};
    animation-duration: 1200ms;
    animation-delay: 2700ms;
    animation-fill-mode: backwards;
  }

  .link a {
    text-decoration: none;
    margin: auto 6px;
    cursor: pointer;

    & > * {
      width: 32px;

      fill: ${p => p.theme.color.Gray9};
      stroke: ${p => p.theme.color.Gray9};

      transition: 250ms;
    }

    & > *:hover {
      transform: scale(1.25) rotateZ(5deg);
    }
  }

  .go-down {
    color: ${p => p.theme.color.Gray0};
    font-size: 4em;

    position: absolute;
    bottom: 50px;
    left: 50%;

    cursor: pointer;
    transform: translateX(-50%);

    animation: ${animation} 1200ms 2700ms 1 normal ease-in-out backwards, ${downUp} 2000ms 3500ms ease-in-out infinite;
  }

  @media (max-width: 400px) {
  }
`

export const FirstSection = () => {
  const uiDispath = useUiDispatch();
  const scrollDown = () => {
    window.scrollTo({
      left: 0,
      top: window.innerHeight,
      behavior: "smooth"
    })
  }

  return (
    <FirstSectionStyle id={"first"}>
      <div className="title-wrap">
        <div className="title">
          <h2 className="title1">저는</h2>
          <h1 className="title2">박희찬</h1>
          <h2 className="title3">입니다</h2>
        </div>

        <div className="message">
          <p>저의 지식을 활용해서<br/>모두에게 도움을 주고 싶습니다.</p>
        </div>


        <div className="link">
          <a href="https://www.github.com/kichan05" target="_blank">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/kichan.ba" target="_blank">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title>
              <path
                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
            </svg>
          </a>
          <a onClick={() => {uiDispath({type:UI_ACTION_TYPE.donation_modal_show})}}>
            <svg xmlns="http://www.w3.org/2000/svg" id="_이어_2" viewBox="0 0 1601.86 1500">
              <g id="Layer_1">
                <path className="cls-1"
                      d="M888.67,340.42L955.44,26.86c3-15.75-10.5-30.01-26.26-26.26-96.77,17.25-197.29,47.26-297.06,90.02C183.54,280.41-88.01,652.48,26.01,921.78c86.27,201.79,364.57,288.06,687.88,237.8l-66.76,313.56c-3,15.75,10.5,30.01,26.26,26.26,96.77-17.25,197.29-47.26,297.06-90.02,448.59-189.79,719.39-561.86,605.37-831.91-85.52-201.04-363.82-287.31-687.13-237.05Z"/>
              </g>
            </svg>
          </a>
        </div>
      </div>

      <GoChevronDown className={"go-down"} onClick={scrollDown}/>
    </FirstSectionStyle>
  )
}