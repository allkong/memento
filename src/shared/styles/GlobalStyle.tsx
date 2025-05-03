import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={theme => css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', 'Helvetica', sans-serif;
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
      }

      button {
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyle;
