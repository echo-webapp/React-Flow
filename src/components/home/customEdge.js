import React from "react";
import { getBezierPath, getMarkerEnd } from "react-flow-renderer";

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

  const edge_style = {
    stroke: "blue",
strokeWidth: 4,
  };
  console.log(sourceX, sourceY, targetX, targetY);

  return (
    <>
      <path
        id={id}
        style={edge_style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      {/* <text>
        <textPath
          href={`#${id}`}
          style={{ fontSize: "20px" }}
          startOffset="50%"
          textAnchor="middle"
        >
          {data.text}
        </textPath>
      </text> */}
    </>
  );
}
