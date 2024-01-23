import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-1: rgb(245 245 245);
    --color-2: rgb(255 255 255);
    --color-3:  rgb(236 73 19);
    /* --color-3:  rgb(76 51 205); */
    --color-4: rgb(42 46 49);
    --dark-color-1: rgb(15 15 15);
    --dark-color-2: rgb(76 51 205);
    --dark-color-3: rgb(245 237 226);
    --black: rgb(0 0 0);
    --accent-color-1: rgb(31 181 74);
    --accent-color-2: rgb(242 85 82);
    --accent-color-3: rgb(87 87 87);
    --border-color-light: lightgrey;
    --border-color-dark: rgb(51 51 51);
    --element-radius: 2rem;
    --element-padding: 2rem;
    --button-radius: 1rem;
    --font-shadow-glow: 0 0 10px rgba(255, 255, 255, 0.7);
    --min-input-height: 4rem;
    --min-input-width:  18.75rem;
    --font-light: 'PoppinsLight', sans-serif;
    --font-regular: 'PoppinsRegular', sans-serif;
    --font-medium: 'PoppinsMedium', sans-serif;
    --font-semi-bold: 'PoppinsSemiBold', sans-serif;



  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, button, input {
    font-family: var(--font-medium)
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-semi-bold)
    }

  .scroll {
      overflow-x: auto;
      width: 100%;

      &::-webkit-scrollbar {
        width: 0.2em;
        height: 0.2rem;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        margin-block-start: 2.5rem;
        margin-block-end: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-3);
        border-radius: 100vw;
    }
    }
`;

export default GlobalStyles;
