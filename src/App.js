import Router from "./routes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ThemeProvider } from "@material-ui/styles";
import { Theme } from "./theme";
import { GlobalStyle } from "./theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyle />
        <Router />
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
