import React, { useState, useEffect } from "react";
import { ItemTypes } from "./ItemTypes";
import * as S from "./styles";
import {
  handtool,
  connector_tool,
  message_icon,
  movetool,
  template2,
  template3,
  template4,
  template5,
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
    <S.MainContainer onClick={() => console.log("clickdes")}>
      <S.Container>
        <S.ToolBar>
          <div>
            <div className="move-tool">{movetool}</div>
          </div>
          <div>
            <div className="hand-tool">{handtool}</div>
          </div>
        </S.ToolBar>
        <S.MessageBar>
          {/* <div className="text">Create</div> */}
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
        <S.ConnectorBar>
          {/* <div className="text">Tool</div> */}
          <div className="icon">{connector_tool}</div>
        </S.ConnectorBar>
        <S.Templates>
          <div className="icon">{template2}</div>
          <div className="icon">{template3}</div>
          <div className="icon">{template4}</div>
          <div className="icon">{template5}</div>
        </S.Templates>
      </S.Container>
    </S.MainContainer>
  );
};

export default Sidebar;
