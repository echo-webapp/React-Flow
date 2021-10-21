import React, { useState, useCallback, useEffect } from "react";
import ReactFlow, { useStoreState } from "react-flow-renderer";
import Leftbar from "../leftbar/leftbar";
import Rightbar from "../RightBar/RightBar";
import * as S from "./styles";
import { useDrop, useDragLayer } from "react-dnd";
import { ItemTypes } from "../leftbar/ItemTypes";
import MessageCard from "../message_card/MessageCard";
import { useDispatch, useSelector } from "react-redux";
import { AddMessage } from "./../../store/Reducers/message";
import {
  RemoveActiveEdge,
  SetActiveCard,
  SetActiveEdge,
} from "../../store/Reducers/cardState";
import { AddEdge, ChangeCardPosition } from "../../store/Reducers/message";
import { RemoveActiveCard } from "../../store/Reducers/cardState";
import { Button } from "@material-ui/core";
import CustomEdge from "./customEdge";

const NodesDebugger = () => {
  const nodes = useStoreState((state) => state.nodes);
  const edges = useStoreState((state) => state.edges);
  return null;
};

const Home = () => {
  const dispatch = useDispatch();
  const [node_elements, activeCardId, activeEdgeId] = useSelector((store) => [
    store.messages.message,
    store.cardState.cardState.activeCardId,
    store.cardState.cardState.activeEdgeId,
  ]);
  const nodeTypes = {
    specialNode: MessageCard,
  };

  const { currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  const [{ isover }, drop] = useDrop(
    () => ({
      accept: ItemTypes.message_card,
      drop: (item, monitor) => {
        addElement(currentOffset);
        return null;
      },
      collect: (monitor) => ({
        isover: !!monitor.isOver(),
      }),
    }),
    [currentOffset]
  );

  const addElement = useCallback((offset) => {
    const rn = (Math.random() * 1000).toFixed(0);
    const new_element = {
      id: rn,
      type: "specialNode",
      data: {
        description: "",
        options: [],
        title: "Message",
        image: null,
      },
      position: { x: offset.x - 100, y: offset.y - 90 },
    };
    dispatch(AddMessage(new_element));
  });

  const activeMessageCard = useCallback((event, element) => {
    let ele = null;
    for (let i = 0; i < node_elements.length; i++) {
      if (node_elements[i].id == element.id) {
        ele = node_elements[i];
      }
    }
    if (ele?.data) {
      if (activeEdgeId) {
        dispatch(RemoveActiveEdge());
      }
      dispatch(SetActiveCard(element.id));
    } else {
      if (activeCardId) {
        dispatch(RemoveActiveCard());
      }
      dispatch(SetActiveEdge(element.id));
    }
  });

  const onConnect = useCallback((params) => {
    const rn = (Math.random() * 1000).toFixed(0);
    const new_param = {
      ...params,
      id: rn,
      type: "customEdge",
    };

    dispatch(AddEdge(new_param));
  });

  const onNodeDrag = useCallback((event, node) => {
    let data = {};
    data.id = node.id;
    data.position = node.position;
    dispatch(ChangeCardPosition(data));
  });
  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    // setnode_elements((els) => updateEdge(oldEdge, newConnection, els));
  });

  const onElementsRemove = useCallback((eletoremove) => {
    // setnode_elements((els) => removeElements(eletoremove, els));
  });

  const EdgeType = { customEdge: CustomEdge };

  const onEdgeContextMenu = (event, edge) => {};

  const removeActiveIds = (e) => {
    if (activeCardId) {
      dispatch(RemoveActiveCard());
    }
    if (activeEdgeId) {
      dispatch(RemoveActiveEdge());
    }
  };

  return (
    <S.MainContainer>
      {/* <Button
        style={{ zIndex: 10, position: "absolute", left: 0, top: 10 }}
        onClick={() => {
          localStorage.removeItem("persist:root");
        }}
      >
        Clear PersistRoot
      </Button> */}
      <S.ReactFlowContainer
        onPaneClick={removeActiveIds}
        onElementClick={activeMessageCard}
        onElementsRemove={onElementsRemove}
        onNodeDrag={onNodeDrag}
        nodesConnectable={true}
        nodesDraggable={true}
        connectionLineStyle={{ strokeWidth: 3 }}
        nodeTypes={nodeTypes}
        ref={drop}
        elements={node_elements}
        isover={isover}
        onConnect={onConnect}
        onEdgeUpdate={onEdgeUpdate}
        edgeTypes={EdgeType}
        onEdgeContextMenu={onEdgeContextMenu}
        maxZoom={10}
      >
        <Leftbar />
        <NodesDebugger />
      </S.ReactFlowContainer>
      <Rightbar />
    </S.MainContainer>
  );
};

export default Home;
