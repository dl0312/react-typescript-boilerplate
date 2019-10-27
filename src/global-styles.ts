import { createGlobalStyle } from "./typed-components";
import { fontSize, color, media } from "./config/_mixin";
export const GlobalStyle = createGlobalStyle`
  @import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css");
  @import url("https://use.fontawesome.com/releases/v5.11.2/css/all.css");
  /* 나눔 고딕체, 도현체, 나눔 명조체, 나눔 펜체 */
  @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic|Playfair+Display|Do+Hyeon|Song+Myung|Thasadith|Nanum+Myeongjo|Nanum+Pen+Script");
  
  * {
      box-sizing: border-box;
  }

  body{
    font-family: 'Nanum Gothic', sans-serif;
    font-size: ${fontSize.normalFontSize};
    background-color: ${color.bgColor};
    color: ${color.fontColor};
    ${media.giant} {
      /* Giant View */
    }
    ${media.desktop} {
      /* Desktop View */
    }
    ${media.tablet} {
      /* Tablet View */
    }
    ${media.phone} {
      /* Phone View */
    }
  }

  a{
    text-decoration: none !important;
    &:hover{
        color: ${color.mainColor};
    }
  }

  button{
    cursor: pointer;
    background-color: white;
    outline: none;
    border: none;
    &:active {
      outline: none;
      border: none;
    }
  }

  /* animations */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeIn {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`;
