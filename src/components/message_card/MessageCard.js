import React, { useRef, useState, useCallback, useEffect } from "react";
import MessageIcon from "../../Assets/message_card/MessageIcon";
import AddImageIcon from "../../Assets/message_card/AddImageIcon";
import { makeStyles } from "@material-ui/core";
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
import { Handle } from "react-flow-renderer";

const useStyles = makeStyles({
  menu: {
    display: "flex",
  },
});

const MessageCard = (props) => {
  const [activeCardId, message] = useSelector((state) => [
    state.cardState.cardState.activeCardId,
    state.messages.message,
  ]);
  const [desc, setdesc] = useState("");
  const image_element = useRef(null);
  const [image, setimage] = useState(null);
  const [image_url, setimage_url] = useState(null);
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
    console.log("image", image?.name);
    if (image?.name) {
      const image_url = URL.createObjectURL(image);
      setimage_url(image_url);
    }
  }, [image]);

  useEffect(() => {
    console.log("image_url", image_url);
  }, [image_url]);

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
  };

  const changeTitle = (e) => {
    dispatch(ChangeTitle({ id: props.id, value: e.target.value }));
  };

  const UploadImage = useCallback((e) => {
    let file = e.target.files[0];
    if (!file) return false;
    let pics = [];
    if (!e.target.files[0]) return false;
    pics.push(e.target.files[0]);
    const image_url = URL.createObjectURL(pics[0]);
    const data = {
      image: pics[0],
      image_url: image_url,
      id: activeCardId,
    };
    dispatch(AddPicture(data));
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
              console.log("clcik");
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
        disabled={image?.name ? true : false}
        hidden
      />
      {image?.name ? (
        <ShowImage id={props.id} image={image} image_url={image_url} />
      ) : null}
      <S.MessageCardInputBody>
        <S.MessageCardInputBodyTextArea
          placeholder="Type something..."
          onChange={descriptionHandler}
          value={desc}
        />
        <Handle
          className="connector"
          type="target"
          position="left"
          id={(Math.random() * 1000).toFixed(0)}
        />
        <Handle
          type="source"
          className="connector"
          position="right"
          id={(Math.random() * 1000).toFixed(0)}
        />

        {!image?.name && (
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
      {optionsList.map((Option, key) => (
        <div key={key} style={{ position: "relative" }}>
          <MessageOption
            optiontext={optionsList[key]}
            optionsList={optionsList}
            index={key}
          />
          {/* <Handle
            type="target"
            position="left"
            id={(Math.random() * 1000).toFixed(0)}
            style={S.connectorStyle}
          />
          <Handle
            type="source"
            position="right"
            id={(Math.random() * 1000).toFixed(0)}
            style={S.connectorStyle}
          /> */}
        </div>
      ))}
      <S.AddOptionButton onClick={() => dispatch(AddOption(activeCardId))}>
        + Add options
      </S.AddOptionButton>
    </S.Container>
  );
};

export default MessageCard;
