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
`;
