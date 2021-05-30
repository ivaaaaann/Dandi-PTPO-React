import React from "react";
import "./RankingBar.css";

function RankingBar() {
  return (
    <div className="ranking-bar-ranking-item">
      <div className="ranking-bar-ranking-item-title font-style"></div>
      <div className="ranking-bar-ranking-item-profile"></div>
      <div className="ranking-bar-ranking-item-box"></div>
      <div className="ranking-bar-ranking-item-name-box">
        <div className="ranking-bar-ranking-item-name font-style"></div>
      </div>
      <div className="ranking-bar-ranking-item-content-name-box">
        <div className="ranking-bar-ranking-item-content-name font-style"></div>
      </div>
      <div className="ranking-bar-ranking-item-point-box font-style">
        <div className="ranking-bar-ranking-item-point"></div>
      </div>
    </div>
  );
}

export default RankingBar;
