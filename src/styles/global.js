import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0 none;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden;
  }

  html {
    font-size: 14px;
  }

  body {
    font: 1rem 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
    color: #FFF;
    background: #121212;
  }

  ul {
    list-style: none;
  }
`;
