import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html, body{
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #0a0e17;
        color: #fff;
        font-size: 16px;
    }
`;

export default GlobalStyles;
