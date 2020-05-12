import { createGlobalStyle } from 'styled-components';
import { fontSize, color, media } from './config/_mixin';
import 'react-toastify/dist/ReactToastify.min.css';
import { IThemeInterface } from './interfaces';

export const GlobalStyle = createGlobalStyle<IThemeInterface>`
  @import url("https://cdnjs.cloudflare.com/ajax/libs/antd/4.1.1/antd.min.css");
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
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body{
    font-family: 'Nanum Gothic', sans-serif;
    font-size: ${fontSize.normalFontSize};
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: all 0.5s ease-in-out;
    /* Responsive Design */
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
    }
  }

  button{
    cursor: pointer;
    background-color: white;
    outline: none;
    border: none;
    &:active {
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
