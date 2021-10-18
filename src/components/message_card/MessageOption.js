import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddOptionData, DeleteOption } from "../../store/Reducers/message";
import * as S from "./styles";
import CrossButtonIcon from "../../Assets/message_card/crossbutton1.svg";

const MessageOption = (props) => {
  const dispatch = useDispatch();
  const [activeCardId, message] = useSelector((state) => [
    state.cardState.cardState.activeCardId,
    state.messages.message,
  ]);
  const [border, setborder] = useState(() => {
    const arr = new Array(props.optionsList.length);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = false;
    }
    return arr;
  });

  const addOptionHandler = (e) => {
    const data = {};
    data.text = e.target.value;
    data.index = props.index;
    data.id = activeCardId;
    dispatch(AddOptionData(data));
  };

  useEffect(() => {
    console.log(border);
  }, [border]);

  const deleteoption = () => {
    console.log("clicked");
    const data = {};
    data.index = props.index;
    data.id = activeCardId;
    dispatch(DeleteOption(data));
  };

  // const ClickHandler = () => {
  //   const border_flags = [...border];
  //   for (let i = 0; i < border_flags.length; i++) {
  //     if (i == props.index) {
  //       border_flags[i] = true;
  //     } else {
  //       border_flags[i] = false;
  //     }
  //   }
  //   console.log(border_flags);
  //   setborder(border_flags);
  // };

  return (
    <S.MessageCardOptionInputBody
      border={border}
      index={props.index}
      total_option={props.optionsList.length}
      // onClick={ClickHandler}
    >
      <S.MessageCardOptionInputBodyTextArea
        placeholder="Type Option..."
        onChange={addOptionHandler}
        value={props.optiontext}
      />
      {border ? (
        <S.CrossButton onClick={deleteoption}>
          <img src={CrossButtonIcon} />
        </S.CrossButton>
      ) : null}
    </S.MessageCardOptionInputBody>
  );
};

export default MessageOption;
