import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    // I could use styled-components themming properties, although it is just a few variables
    --cl-white: #ffffff;
    --cl-black: #000000;
    --cl-bg: #DDDDDD;
    --cl-detail: #cccccc;
    --cl-ligth-detail: #999999;
    --cl-overlay: #777777;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--cl-bg);
  }

  body, input, button, textarea {
    font: 400 1rem 'Roboto', sans-serif;
    color: var(--cl-black);
  }

  
  @media (max-width: 420px) {
    html {
      font-size: 87.5%; //14px
    }
  }
  
  @media (min-width: 421px) {
    html {
      font-size: 93.75%; //15px
    }
  }
  
  @media (min-width: 820px) {
    html {
      font-size: 100%; //16px
    }
  }

  @media (min-width: 1240px) {
    html {
      font-size: 106.25%; //17px
    }
  }

  @media (min-width: 1660px) {
    html {
      font-size: 112.5%; //18px
    }
  }

  @media (min-width: 1820px) {
    html {
      font-size: 125%; //20px
    }
  }

  @media (min-width: 2340px) {
    html {
      font-size: 150%; //24px
    }
  }
`