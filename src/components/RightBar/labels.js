import React, { useState, useEffect } from "react";
import EditIcon from "../../Assets/RightBar/EditIcon";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SetLabelList } from "./../../store/Reducers/labelState";
const Labels = () => {
  const dispatch = useDispatch();
  const labelList = useSelector((state) => state.labelState);
  const allNodes = useSelector((state) => state.messages.message);
  const [labelFlag, setlabelFlag] = useState(true);
  const [countValue, setCountValue] = useState({
    label1: 0,
    label2: 0,
    label3: 0,
    label4: 0,
    label5: 0,
  });
  useEffect(() => {
    let a = 0,
      b = 0,
      c = 0,
      d = 0,
      e = 0;
    for (let i = 0; i < allNodes.length; i++) {
      if (allNodes[i].tag != undefined) {
        if (allNodes[i].tag === "#E28383") a = a + 1;
        if (allNodes[i].tag === "#D9D572") b = b + 1;
        if (allNodes[i].tag === "#8699DD") c = c + 1;
        if (allNodes[i].tag === "#8ACF7F") d = d + 1;
        if (allNodes[i].tag === "#C48EBE") e = e + 1;
      }
    }
    setCountValue({
      label1: a,
      label2: b,
      label3: c,
      label4: d,
      label5: e,
    });
  }, [allNodes]);
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
          <div className="LabelListItem3">
            {countValue.label1.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </div>
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
          <div className="LabelListItem3">
            {countValue.label2.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </div>
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
          <div className="LabelListItem3">
            {countValue.label3.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </div>
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
          <div className="LabelListItem3">
            {countValue.label4.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </div>
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
          <div className="LabelListItem3">
            {countValue.label5.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labels;
