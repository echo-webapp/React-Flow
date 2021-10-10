import React from "react";
import MessgeIcon from "./Message.svg";
const MessageIcon = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={MessgeIcon}
        height={props.height}
        width={props.width}
        alt="loading"
      />
    </div>
  );
};

export default MessageIcon;
