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
    --accent-color: #13547a;
    --text-color-light: #fff;
    --text-color-dark: #848786;
    --hover-color: #398dbe;
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
    min-height: 100vh;
    color: var(--text-color-light);
    background: linear-gradient(45deg, #13547a, #80d0c7) no-repeat;
  }
`;
