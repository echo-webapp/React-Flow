import React, { useState } from "react";
import ReactFlow from "react-flow-renderer";
import * as S from "./styles";
import { Paper } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";

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
  {
    id: "1",
    data: {
      label: MessageElement,
    },
    position: { x: 250, y: 5 },
  },
  { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
  { id: "3", data: { label: "Node 3" }, position: { x: 200, y: 200 } },
  { id: "e1-2", source: "1", target: "2", animated: false },
  { id: "e1-2", source: "2", target: "3", animated: false },
];
const elements1 = [
  {
    id: "1",
    style: { background: "#ffcc50", width: 100 },
    data: { label: "custom style" },
    position: { x: 100, y: 5 },
  },
];

const flowStyles = { height: "50vh", backgroundColor: "#eee" };

const BasicFlow = () => {
  const [node_elements, setnode_elements] = useState(elements);
  const [data, setdata] = useState("somedata");

  const addElement = () => {
    const new_element = {
      id: "4",
      data: {
        label: MessageElement,
      },
      position: { x: 500, y: 100 },
    };
    setnode_elements((prev) => [...prev, new_element]);
  };
  return (
    <S.MainContainer>
      <S.LeftSection>
        <div onClick={addElement}></div>
        <div className="round"></div>
      </S.LeftSection>
      <ReactFlow elements={node_elements} style={flowStyles} />
    </S.MainContainer>
  );
};

export default BasicFlow;
