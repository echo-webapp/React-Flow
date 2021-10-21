import React, { useState, useEffect } from "react";
import { ItemTypes } from "./ItemTypes";
import * as S from "./styles";
import {
  delete_icon,
  saveicon,
  message_icon,
} from "../../Assets/leftbar/all_icons";
import { useDrag, useDragLayer } from "react-dnd";

const Sidebar = () => {
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

  return (
    <S.MainContainer onClick={() => {}}>
      <S.Container>
        <S.IconDiv className="left" side="left">
          <div className="icon">{saveicon}</div>
        </S.IconDiv>
        <S.MessageBar>
          {!collect.isDragging ? (
            <div className="icon" ref={drag}>
              {message_icon}
            </div>
          ) : (
            <div className="icon" ref={dragPreview}>
              {message_icon}
            </div>
          )}
        </S.MessageBar>
        <S.IconDiv className="right" side="right">
          <div className="icon">{delete_icon}</div>
        </S.IconDiv>
      </S.Container>
    </S.MainContainer>
  );
};

export default Sidebar;
