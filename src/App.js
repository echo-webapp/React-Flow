import React, { useEffect } from "react";
import Router from "./routes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { GlobalStyle } from "./theme";
import SaveFlow from "./components/save&delete/SaveFlow";
import DeleteFlow from "./components/save&delete/DeleteFlow";
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />
      <Router />
    </DndProvider>
  );
}

export default App;
