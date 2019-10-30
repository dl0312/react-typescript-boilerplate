import { createGlobalStyle } from './typed-components';
import { fontSize, color, media } from './config/_mixin';
export const GlobalStyle = createGlobalStyle`
  /*
    normalize.css - https://necolas.github.io/normalize.css/
  */
  @import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css");
  /*
    Fontawesome - https://fontawesome.com/
  */
  @import url("https://use.fontawesome.com/releases/v5.11.2/css/all.css");
  /*
    Web Fonts from Google Fonts

    배달의민족 도현 - https://fonts.google.com/specimen/Do+Hyeon
    송명 - https://fonts.google.com/specimen/Song+Myung
    나눔 고딕 - https://fonts.google.com/specimen/Nanum+Gothic
    나눔 명조 - https://fonts.google.com/specimen/Nanum+Myeongjo
    나눔손글씨 펜 - https://fonts.google.com/specimen/Nanum+Pen+Script
    검은고딕 - https://fonts.google.com/specimen/Black+Han+Sans

    Use the following CSS rules to specify these families:
    font-family: 'Black Han Sans', sans-serif;
  */
  @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic|Black+Han+Sans|Do+Hyeon|Song+Myung|Nanum+Myeongjo|Nanum+Pen+Script");
  * {
      box-sizing: border-box;
  }

  body{
    font-family: 'Nanum Gothic', sans-serif;
    font-size: ${fontSize.normalFontSize};
    /* background-color: ${color.default.bgColor};
    color: ${color.default.fontColor}; */
    background-color: ${color.darkmode.bgColor};
    color: ${color.darkmode.fontColor};
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
        color: ${color.default.mainColor};
        color: ${color.darkmode.mainColor};
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
