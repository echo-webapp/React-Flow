import React, { useEffect, useRef, useState } from "react";
import ReactFlow from "react-flow-renderer";
import * as S from "./styles";
import { Paper } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";
import { ItemTypes } from "./ItemTypes";
import { useDrag, useDrop, useDragLayer } from "react-dnd";

const MessageElement = (
  <S.Container>
    <S.TitleDiv>
      <div>
        <MessageIcon />
      </div>
      <S.Title>Messages</S.Title>
    </S.TitleDiv>
    <S.Messages>
      <div>
        <Paper>Welcom to ABC Store</Paper>
      </div>
    </S.Messages>
  </S.Container>
);

const elements = [
  // {
  //   id: 1,
  //   data: {
  //     label: MessageElement,
  //   },
  //   // style: { background: "#ffcc50", width: 100 },
  //   position: { x: 250, y: 5 },
  // },
];

const BasicFlow = () => {
  const [node_elements, setnode_elements] = useState(elements);
  const [number, setnumber] = useState(0);
  const { currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  const [collect, drag, dragPreview] = useDrag(() => ({
    type: ItemTypes.message_card,
    item: {
      coordinates: currentOffset,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
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
    height: "50vh",
    backgroundColor: isOver ? "#aaa" : "#eee",
  };

  const addElement = (offset) => {
    const new_element = {
      id: (Math.random() * 1000).toFixed(0),
      data: {
        label: MessageElement,
      },
      position: { x: offset.x - 100, y: offset.y - 100 },
    };
    setnode_elements((prev) => [...prev, new_element]);
    setnumber((prev) => prev + 1);
  };

  return (
    <S.MainContainer>
      <S.LeftSection>
        {!collect.isDragging ? (
          <S.MessageSec id="sec" ref={drag} onClick={addElement}>
            <MessageIcon />
          </S.MessageSec>
        ) : (
          <S.MessageSec ref={dragPreview} onClick={addElement}>
            <MessageIcon />
          </S.MessageSec>
        )}

        <div className="round"></div>
      </S.LeftSection>
      <ReactFlow
        nodesConnectable={true}
        ref={drop}
        elements={node_elements}
        style={flowStyles}
      />
    </S.MainContainer>
  );
};

export default BasicFlow;
