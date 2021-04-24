import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: #FAF9F9;
    -webkit-font-smoothing: antialiased;
  }

  body, button, textarea, input {
    font: 14px 400 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

`;
