import React from "react";
import "./RankContainer.css";
import Rank from "./Rank";
import RankingBar from "../routes/RankingBar";

function RankContainer() {
  return (
    <div className="ranking-main-content">
      <div className="ranking-bar">
        <Rank />
        <RankingBar />
      </div>
    </div>
  );
}

export default RankContainer;
