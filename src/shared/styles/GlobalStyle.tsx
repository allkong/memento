import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', 'Helvetica', sans-serif;
        background-color: #f9f9f9;
        color: #333;
      }

      button {
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyle;
