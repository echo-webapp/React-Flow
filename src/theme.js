import { createTheme } from "@material-ui/core";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

svg {
  vertical-align: middle;
}
`;

export const Theme = createTheme({
  color: {
    purple: "#6D0FF2",
    skygreen: "#04BFBF",
    lightgreen: "#04D9B2",
    yellow: "#F2B705",
    orange: "#F29F05",
    border: "white",
    greeng: "linear-gradient(135.31deg, #04BFBF 4.68%, #04D9B2 100%)",
    yellowg: "linear-gradient(135deg, #F2B705 0%, #F29F05 100%)",
  },
});
