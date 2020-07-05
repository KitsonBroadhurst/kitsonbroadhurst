import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: proxima-nova, sans-serif;
    font-size: 18px;
    line-height: 1.8;
    font-weight: 400;
    transition: all 0.50s linear;
    h1, h2, h3, h4, h5 {
      color: ${({ theme }) => theme.heading};
    }
    button {
      background: ${({ theme }) => theme.button};
      color: ${({ theme }) => theme.buttonText};
    }
  }
`