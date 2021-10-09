import React, { useState } from "react";
import ReactFlow from "react-flow-renderer";
import Sidebar from "./components/sidebar/sidebar";
import * as S from "./styles";
import { useDrag, useDrop, useDragLayer } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import MessageCard from "./MessageCard";

const Home = () => {
  const [node_elements, setnode_elements] = useState([]);

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

  const flowStyles = {
    height: "90vh",
    backgroundColor: isOver ? "#aaa" : "#eee",
    borderRadius: "50px",
    marginRight: 20,
  };

  const addElement = (offset) => {
    const new_element = {
      id: (Math.random() * 1000).toFixed(0),
      data: {
        label: MessageCard,
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
        ref={drop}
        elements={node_elements}
        style={flowStyles}
      />
    </S.MainContainer>
  );
};

export default Home;
