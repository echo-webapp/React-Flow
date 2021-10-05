import React, { useState } from "react";
import ReactFlow, { addEdge, MiniMap, Controls } from "react-flow-renderer";
import Sidebar from "./sidebar";
const initialElements = [
  {
    id: "1",
    data: { label: "Node 1" },
    position: { x: 250, y: 25 },
  },
  {
    id: "2",
    data: { label: "Node 2" },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    data: { label: "Node 3" },
    position: { x: 250, y: 250 },
  },
  {
    id: "4",
    data: { label: "Node 4" },
    position: { x: 20, y: 45 },
  },
  {
    id: "5",
    data: { label: "Node 5" },
    position: { x: 80, y: 105 },
  },
];
const InteractionFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        elements={elements}
        nodesConnectable={true}
        onConnect={onConnect}
      >
        <MiniMap />
        <Controls />
        <Sidebar />
      </ReactFlow>
    </div>
  );
};

export default InteractionFlow;
