import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;

    &.lockScroll {
      max-height: 100vh;
      overflow: hidden;
    }
  }

  body, input, button, textarea, select {
    font: 400 1rem "Heebo", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  #__next {
    min-height: 100vh;
  }


  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.50%;
    }
  }

  :root {
    --white: #FFFFFF;

    --main: #2E63F7;

    --purple-700: #AB2680;

    --gray-50: ##E0E6EE;
    --gray-600: #999999;
    --gray-800: #333333;
    --gray-900: rgba(0, 0, 0, 0.32);
  }
  
  input[type='date']::-webkit-inner-spin-button,
  input[type='date']::-webkit-calendar-picker-indicator {
    position: relative;
    opacity: 0;
    z-index: 5;
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--gray-300);
    border-radius: 0;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0;
    background: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 425px) {
    ::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-track {
      display: none;
    }
  }
`;
