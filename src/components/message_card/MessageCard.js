import React, { useRef, useState, useCallback, useEffect } from "react";
import MessageIcon from "../../Assets/message_card/MessageIcon";
import AddImageIcon from "../../Assets/message_card/AddImageIcon";
import ShowImage from "./ShowImage";
import DeleteIcons from "../../Assets/message_card/DeleteIcon";
import MessageOption from "./MessageOption";
import { useSelector } from "react-redux";
import {
  AddDescription,
  AddPicture,
  AddOption,
  removeMessage,
  ChangeTitle,
} from "../../store/Reducers/message";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { Handle, Position } from "react-flow-renderer";
import { RemoveActiveCard } from "./../../store/Reducers/cardState";
const ID = Math.random().toString(36).substr(2, 6);

const MessageCard = (props) => {
  const [activeCardId, message] = useSelector((state) => [
    state.cardState.cardState.activeCardId,
    state.messages.message,
  ]);
  const [desc, setdesc] = useState("");
  const image_element = useRef(null);
  const [image, setimage] = useState(null);
  const dispatch = useDispatch();
  const [optionsList, setoptionsList] = useState([]);
  const [title, settitle] = useState("");
  const [tag_status, settag_status] = useState(null);
  const [title_flag, settitle_flag] = useState(true);

  useEffect(() => {
    message.map((message) => {
      if (message.id == props.id) {
        setimage(message.data.image);
      }
      return null;
    });
  }, [message]);

  useEffect(() => {
    message.map((message) => {
      if (message.id == props.id) {
        settag_status(message.tag);
      }
      return null;
    });
  }, [message]);

  useEffect(() => {
    message.map((message) => {
      if (message.id == props.id) {
        setoptionsList(message.data.options);
      }
      return null;
    });
  }, [message]);

  useEffect(() => {
    message.map((message) => {
      if (message.id == props.id) {
        setdesc(message.data.description);
      }
      return null;
    });
  }, [message]);

  useEffect(() => {
    message.map((message) => {
      if (message.id == props.id) {
        settitle(message.data.title);
      }
      return null;
    });
  }, [message]);

  const descriptionHandler = (e) => {
    let data = {};
    data.value = e.target.value;
    data.id = activeCardId;
    dispatch(AddDescription({ data: data, id: props.id }));
  };

  const removeNode = () => {
    dispatch(removeMessage(props.id));
    dispatch(RemoveActiveCard(props.id));
  };

  const changeTitle = (e) => {
    dispatch(ChangeTitle({ id: props.id, value: e.target.value }));
  };

  const UploadImage = useCallback((e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + " kB",
        base64: reader.result,
        file: file,
      };
      const data = {
        binary: reader.result,
        id: activeCardId,
      };
      dispatch(AddPicture(data));
    };
  });

  return (
    <S.Container activeId={activeCardId} id={props.id}>
      <S.MessageCardHeader>
        <S.MessageCardStatusTag color={tag_status}></S.MessageCardStatusTag>
        <S.MessageCardHeaderLeft>
          <S.MessageCardHeaderLeftIcon>
            <MessageIcon height="25px" width="25px" />
          </S.MessageCardHeaderLeftIcon>
          <S.MessageCardHeaderTitle
            readOnly={title_flag}
            onDoubleClick={(e) => {
              e.preventDefault();
              settitle_flag(false);
            }}
            onBlur={() => settitle_flag(true)}
            onChange={changeTitle}
            value={title}
          />
        </S.MessageCardHeaderLeft>
        <S.MessageCardHeaderRight
          onClick={() => {
            removeNode();
          }}
        >
          <S.DeleteIconDiv>
            <DeleteIcons height="20px" width="20px" />
          </S.DeleteIconDiv>
        </S.MessageCardHeaderRight>
      </S.MessageCardHeader>
      <input
        type="file"
        accept="image/*"
        ref={image_element}
        onChange={UploadImage}
        disabled={image ? true : false}
        hidden
      />
      {image ? <ShowImage id={props.id} image={image} /> : null}
      <S.MessageCardInputBody>
        <S.MessageCardInputBodyTextArea
          placeholder="Type something..."
          onChange={descriptionHandler}
          value={desc}
        />
        <Handle
          className="connector"
          type="target"
          position={Position.Left}
          style={{ top: "50%" }}
          id={`a`}
        />
        <Handle
          type="source"
          className="connector"
          position={Position.Right}
          style={{ top: "50%" }}
          id={`a`}
        />

        {!image && (
          <S.AddImage>
            <div
              onClick={() => {
                image_element.current.click();
              }}
            >
              <AddImageIcon height="20px" width="20px" />
            </div>
          </S.AddImage>
        )}
      </S.MessageCardInputBody>
      {optionsList.map((Option, key) => {
        return (
          <div key={key} style={{ position: "relative" }}>
            <MessageOption
              optiontext={optionsList[key]}
              optionsList={optionsList}
              index={key}
            />
            {/* <Handle
              className="connector"
              type="target"
              position={Position.Left}
              id={`${key}`}
              style={{ top: "50%" }}
            /> */}
            <Handle
              className="connector"
              type="source"
              position={Position.Right}
              id={`${key}`}
              style={{ top: "50%" }}
            />
          </div>
        );
      })}
      <S.AddOptionButton onClick={() => dispatch(AddOption(activeCardId))}>
        + Add options
      </S.AddOptionButton>
    </S.Container>
  );
};

export default MessageCard;
