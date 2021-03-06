import React, { useEffect, useState } from "react";
import "./RightBar.css";
import Avatar from "@material-ui/core/Avatar";
import Labels from "./labels";
import Description from "./Description";
import EdgeLabel from "./EdgeLabel";
import { useSelector } from "react-redux";
const RightBar = () => {
  const [activeCardId, activeEdgeId] = useSelector((state) => [
    state.cardState.cardState.activeCardId,
    state.cardState.cardState.activeEdgeId,
  ]);
  const allNodes = useSelector((state) => state.messages.message);
  const [currentCard, setCurrentCard] = useState(null);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    for (let i = 0; i < allNodes.length; i++) {
      if (allNodes[i].id === activeCardId) {
        if (allNodes[i]?.data?.messageDescription === undefined) {
          setFlag(false);
        } else setFlag(true);
        setCurrentCard(allNodes[i]);
      }
    }
  }, [activeCardId, allNodes]);
  const messageDescriptionHandler = () => {
    setFlag(true);
  };
  return (
    <div className="RightBarMainContainer">
      <div className="RightBarHeader">
        <div className="RightBarHeaderName">Hi, Yuval</div>
        <div className="RightBarHeaderImage">
          <Avatar
            alt="Remy Sharp"
            src="./Assets/sample.png"
            sx={{ width: 30, height: 30 }}
          />
        </div>
      </div>
      <Labels />
      {activeCardId &&
        currentCard?.data?.messageDescription === undefined &&
        !flag && (
          <button
            onClick={messageDescriptionHandler}
            className="RightBarDescriptionButton"
          >
            + Add Description
          </button>
        )}
      {flag && activeCardId && (
        <Description activeCardId={activeCardId} currentCard={currentCard} />
      )}
      {activeEdgeId && <EdgeLabel activeEdgeId={activeEdgeId} />}
    </div>
  );
};

export default RightBar;
