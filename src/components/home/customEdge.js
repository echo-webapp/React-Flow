import React, { useState, useEffect } from "react";
import { getBezierPath, getMarkerEnd } from "react-flow-renderer";
import { useSelector } from "react-redux";

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  arrowHeadType,
  markerEndId,
}) {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
  const [activeEdgeId, message] = useSelector((store) => {
    return [store.cardState.cardState.activeEdgeId, store.messages.message];
  });

  const [text, settext] = useState(null);

  useEffect(() => {
    message.map((message) => {
      if (message.id == id) {
        settext(message?.label);
      }
      return null;
    });
  }, [message]);

  useEffect(() => {});
  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <text>
        <textPath
          href={`#${id}`}
          style={{ fontSize: "20px" }}
          startOffset="50%"
          textAnchor="middle"
        >
          {text}
        </textPath>
      </text>
    </>
  );
}
