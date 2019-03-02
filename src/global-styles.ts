import reset from "styled-reset";
import { createGlobalStyle } from "./typed-components";

// tslint:disable-next-line
export const GlobalStyle = createGlobalStyle`
${reset};
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/antd/3.10.7/antd.min.css");
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Nanum+Myeongjo|Nanum+Pen+Script');
  * {
      box-sizing: border-box;
  }
  body{
    overflow: hidden;
    font-family: 'Nanum Gothic', sans-serif;
  }
  input{
    border: none;
    &:focus{
      outline: none;
    }
  }
  .player-wrapper {
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
}

.react-player {
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes expend {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
