import React from "react";
import TextareaAutosize from "react-textarea-autosize";
const MessageOption = () => {
  return (
    <div className="MessageCardOptionInputBody">
      <TextareaAutosize
        placeholder="Option Number"
        onChange={() => {}}
        className="MessageCardOptionInputBodyTextArea"
      />
    </div>
  );
};

export default MessageOption;
