import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-1: rgb(250 250 250);
    --color-2: rgb(255 255 255);
    --color-3: rgb(0 108 255);
    --color-4: rgb(42 46 49);
    --dark-color-1: rgb(15 15 15);
    --dark-color-2: rgb(106 14 255);
    --dark-color-3: rgb(245 237 226);
    --black: rgb(0 0 0);
    --accent-color-1: rgb(31 181 74);
    --accent-color-2: rgb(242 85 82);
    --accent-color-3: rgb(87 87 87);



  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
