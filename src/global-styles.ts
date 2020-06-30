import { createGlobalStyle } from 'styled-components';
import { fontSize, color, media } from './config/_mixin';
import { IThemeInterface } from './interfaces';
import 'react-toastify/dist/ReactToastify.min.css';

export const GlobalStyle = createGlobalStyle<IThemeInterface>`
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
    
    transition: background 0.5s ease-in-out;
    transition: color 0.5s ease-in-out;

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
