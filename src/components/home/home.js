import React, { useState, useCallback } from "react";
import ReactFlow, {
  useStoreState,
  useUpdateNodeInternals,
} from "react-flow-renderer";
import Sidebar from "../sidebar/sidebar";
import * as S from "./styles";
import { useDrop, useDragLayer } from "react-dnd";
import { ItemTypes } from "../sidebar/ItemTypes";
import { Button } from "@material-ui/core";
import MessageCard from "../message_card/MessageCard";

const NodesDebugger = () => {
  const nodes = useStoreState((state) => state.nodes);

  console.log("inside debugger", nodes);
  nodes.map((node, key) => {
    console.log(`node${key}`, node.data);
  });

  return null;
};

const nodeTypes = {
  special: MessageCard,
};

const Home = () => {
  const [node_elements, setnode_elements] = useState([]);
  const [number, setnumber] = useState(0);

  const { currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.message_card,
      drop: (item, monitor) => {
        addElement(currentOffset);
        return null;
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [currentOffset]
  );

  const buttonclick = (e) => {
    console.log("clicked", e);
    setnumber((prev) => prev + 1);
  };

  const ele = (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onClick={(e) => buttonclick(e)}>Add</Button>
      <div>{number}</div>
    </div>
  );

  const flowStyles = {
    height: "90vh",
    backgroundColor: isOver ? "#aaa" : "#eee",
    borderRadius: "50px",
    marginRight: 20,
  };

  const addElement = (offset) => {
    const rn = (Math.random() * 1000).toFixed(0);
    const new_element = {
      id: rn,
      type: "special",
      data: {
        number: number,
      },
      position: { x: offset.x - 100, y: offset.y - 100 },
    };
    setnode_elements((prev) => [...prev, new_element]);
  };

  return (
    <S.MainContainer>
      <Sidebar />
      <ReactFlow
        nodesConnectable={true}
        nodesDraggable={true}
        nodeTypes={nodeTypes}
        ref={drop}
        elements={node_elements}
        style={flowStyles}
      >
        <NodesDebugger />
      </ReactFlow>
    </S.MainContainer>
  );
};

export default Home;
