import { Fragment } from "react";
import Router from "./routes";
import { Route } from "react-router";
import FlowChart from "./basic_flow";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router />
    </DndProvider>
  );
}

export default App;
