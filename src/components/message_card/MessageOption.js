import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddOptionData } from "../../store/Reducers/message";
import * as S from "./stlyes";

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
    <S.MessageCardOptionInputBody>
      <S.MessageCardOptionInputBodyTextArea
        placeholder="Option Number"
        onChange={addOptionHandler}
      />
    </S.MessageCardOptionInputBody>
  );
};

export default MessageOption;
