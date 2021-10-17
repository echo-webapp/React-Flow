import { createTheme } from "@material-ui/core";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color:#6727F2;
    --secondary-color:#EAE7F1;
    --white:#F0F2F2;
    --gradient-green:linear-gradient(135.31deg, #04BFBF 4.68%, #04D9B2 100%);
    --gradient-yellow:linear-gradient(135deg, #F2B705 0%, #F29F05 100%);
    --font: 'Poppins', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:var(--font) !important;
  }
  svg {
    vertical-align: middle;
  }
  .react-flow__edge-path{
    stroke: black;
    stroke-width: 2.5;
  }
;

`;
