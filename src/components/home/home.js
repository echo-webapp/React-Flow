import React, { useState, useCallback } from "react";
import ReactFlow, {
  useStoreState,
  addEdge,
  updateEdge,
  removeElements,
} from "react-flow-renderer";
import Sidebar from "../sidebar/sidebar";
import * as S from "./styles";
import { useDrop, useDragLayer } from "react-dnd";
import { ItemTypes } from "../sidebar/ItemTypes";
import MessageCard from "../message_card/MessageCard";
import { useDispatch } from "react-redux";
import { AddMessage } from "./../../store/Reducers/message";
import { SetActiveCard } from "../../store/Reducers/cardState";
import { AddEdge } from "../../store/Reducers/edges";

const NodesDebugger = () => {
  const nodes = useStoreState((state) => state.nodes);
  const edges = useStoreState((state) => state.edges);

  // console.log("Nodes", nodes);
  // console.log("Edges", edges);

  return null;
};

const nodeTypes = {
  special: MessageCard,
};

const Home = () => {
  const dispatch = useDispatch();
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

  const flowStyles = {
    height: "90vh",
    backgroundColor: isOver ? "#aaa" : "#eee",
    borderRadius: "50px",
    marginRight: 20,
  };

  const addElement = useCallback((offset) => {
    const rn = (Math.random() * 1000).toFixed(0);
    const new_element = {
      id: rn,
      type: "special",
      data: {
        number: number,
      },
      position: { x: offset.x - 250, y: offset.y - 100 },
    };
    dispatch(AddMessage(new_element));
    setnode_elements((prev) => [...prev, new_element]);
  });

  const activeMessageCard = useCallback((event, element) => {
    dispatch(SetActiveCard(element.id));
  });

  const onConnect = useCallback((params) => {
    dispatch(AddEdge(params));
    setnode_elements((els) => addEdge(params, els));
  });

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    setnode_elements((els) => updateEdge(oldEdge, newConnection, els));
  });

  const onElementsRemove = useCallback((eletoremove) => {
    setnode_elements((els) => removeElements(eletoremove, els));
  });

  return (
    <S.MainContainer>
      <Sidebar />
      <ReactFlow
        onElementClick={activeMessageCard}
        onElementsRemove={onElementsRemove}
        nodesConnectable={true}
        nodesDraggable={true}
        nodeTypes={nodeTypes}
        ref={drop}
        elements={node_elements}
        style={flowStyles}
        onConnect={onConnect}
        onEdgeUpdate={onEdgeUpdate}
        maxZoom={10}
      >
        <NodesDebugger />
      </ReactFlow>
    </S.MainContainer>
  );
};

export default Home;
