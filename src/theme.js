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
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

`;
