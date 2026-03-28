import { createGlobalStyle } from 'styled-components';
import DancingScript from '../../shared/assets/fonts/DancingScript-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'Dancing Script';
    font-style: bold;
    font-weight: 700;
    src: url(${DancingScript}) format('truetype');
    font-display: swap;
  }

  :root {
    --bg-color: #000;
    --accent-color: #3ca37f;
    --text-color-light: #c2c2c2;
    --text-color-dark: #848786;
    --hover-color: #167556;
    --disabled-color: #f2f2f2;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;

    color: var(--text-color-light);
    background-color: var(--bg-color);
  }
`;
