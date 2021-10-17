import React, { useState } from "react";
import EditIcon from "../../Assets/RightBar/EditIcon";
const Labels = () => {
  const [labelList, setLabelList] = useState({
    label1: "Urgent",
    label2: "Pending",
    label3: "Inprogress",
    label4: "Done",
    label5: "Approved",
  });
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
                setLabelList({ ...labelList, label1: e.target.value })
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
                setLabelList({ ...labelList, label2: e.target.value })
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
                setLabelList({ ...labelList, label3: e.target.value })
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
                setLabelList({ ...labelList, label4: e.target.value })
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
                setLabelList({ ...labelList, label5: e.target.value })
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
