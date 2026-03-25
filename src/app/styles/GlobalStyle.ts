import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #000;
    --accent-color: #3ca37f;
    --text-color-light: #c2c2c2;
    --text-color-dark: #848786;
    --hover-color: #167556;
    --disabled-color: #d8f0e8;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;
