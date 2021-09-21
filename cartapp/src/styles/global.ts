import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  *:focus {
    outline: 0;
  }
  
  html,
  body {
    height: 100%;
    background-color: #061826;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
