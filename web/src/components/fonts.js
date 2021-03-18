import React from 'react';
import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'GT Haptik';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("fonts/GT-Haptik-Regular.woff2") format('woff2');
      }
      @font-face {
        font-family: 'GT Haptik';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('../fonts/GT-Haptik-Bold.woff2') format('woff2');
      }
      @font-face {
        font-family: 'GT Haptik';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('../fonts/GT-Haptik-Regular-Rotalic.woff2') format('woff2');
      }
    `}
  />
)

export default Fonts