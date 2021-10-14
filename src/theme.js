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
    black: "black",
    white: "white",
    light: "#D1D1D1",
    dark: "#514C4C",
    border: "#909090",
  },
});
