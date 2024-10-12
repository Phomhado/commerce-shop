// src/styles/GlobalStyles.ts
"use client";  

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }
`;

export default GlobalStyle;
