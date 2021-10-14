import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddOptionData } from "../../store/Reducers/message";
const MessageOption = (props) => {
  const dispatch = useDispatch();
  const activeCardId = useSelector(
    (state) => state.cardState.cardState.activeCardId
  );
  const addOptionHandler = (e) => {
    const data = {};
    data.text = e.target.value;
    data.index = props.index;
    data.id = activeCardId;
    dispatch(AddOptionData(data));
  };
  return (
    <div className="MessageCardOptionInputBody">
      <TextareaAutosize
        placeholder="Option Number"
        onChange={addOptionHandler}
        className="MessageCardOptionInputBodyTextArea"
      />
    </div>
  );
};

export default MessageOption;
