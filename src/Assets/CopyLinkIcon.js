import React from "react";
import CopyLinkIcon from "./CopyLink.svg";
const CopyLink = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={CopyLinkIcon}
        height={props.height}
        width={props.width}
        alt="loading"
      />
    </div>
  );
};

export default CopyLink;
