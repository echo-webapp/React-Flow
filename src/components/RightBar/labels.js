import React, { useState } from "react";
import EditIcon from "../../Assets/RightBar/EditIcon";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SetLabelList } from "./../../store/Reducers/labelState";
const Labels = () => {
  const dispatch = useDispatch();
  const labelList = useSelector((state) => state.labelState);
  console.log(labelList);
  const [labelFlag, setlabelFlag] = useState(true);
  return (
    <div className="LabelContainer">
      <div className="LabelContainerHeader">
        <div className="LabelHeaderText">Labels</div>
        <div
          className="LabelHeaderIcon"
          onClick={() => {
            setlabelFlag(false);
          }}
        >
          <EditIcon height="15px" width="15px" />
        </div>
      </div>
      <div className="LabelList">
        <div className="LabelListItem">
          <div className="LabelListItem0">
            <div className="LabelListItem5"></div>
            <input
              className="LabelListItem2"
              name="label1"
              value={labelList.label1}
              onChange={(e) =>
                dispatch(
                  SetLabelList({ label: "label1", value: e.target.value })
                )
              }
              onBlur={() => {
                setlabelFlag(true);
              }}
              disabled={labelFlag}
            />
          </div>
          <div className="LabelListItem3">1</div>
        </div>
        <div className="LabelListItem">
          <div className="LabelListItem0">
            <div className="LabelListItem6"></div>
            <input
              className="LabelListItem2"
              name="label1"
              value={labelList.label2}
              onChange={(e) =>
                dispatch(
                  SetLabelList({ label: "label2", value: e.target.value })
                )
              }
              onBlur={() => {
                setlabelFlag(true);
              }}
              disabled={labelFlag}
            />
          </div>
          <div className="LabelListItem3">2</div>
        </div>

        <div className="LabelListItem">
          <div className="LabelListItem0">
            <div className="LabelListItem7"></div>
            <input
              className="LabelListItem2"
              name="label1"
              value={labelList.label3}
              onChange={(e) =>
                dispatch(
                  SetLabelList({ label: "label3", value: e.target.value })
                )
              }
              onBlur={() => {
                setlabelFlag(true);
              }}
              disabled={labelFlag}
            />
          </div>
          <div className="LabelListItem3">3</div>
        </div>
        <div className="LabelListItem">
          <div className="LabelListItem0">
            <div className="LabelListItem8"></div>
            <input
              className="LabelListItem2"
              name="label1"
              value={labelList.label4}
              onChange={(e) =>
                dispatch(
                  SetLabelList({ label: "label4", value: e.target.value })
                )
              }
              onBlur={() => {
                setlabelFlag(true);
              }}
              disabled={labelFlag}
            />
          </div>
          <div className="LabelListItem3">4</div>
        </div>

        <div className="LabelListItem">
          <div className="LabelListItem0">
            <div className="LabelListItem9"></div>
            <input
              className="LabelListItem2"
              name="label1"
              value={labelList.label5}
              onChange={(e) =>
                dispatch(
                  SetLabelList({ label: "label5", value: e.target.value })
                )
              }
              onBlur={() => {
                setlabelFlag(true);
              }}
              disabled={labelFlag}
            />
          </div>
          <div className="LabelListItem3">5</div>
        </div>
      </div>
    </div>
  );
};

export default Labels;
