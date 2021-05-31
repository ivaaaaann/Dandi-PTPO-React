import React from "react";
import "./Rank.css";
import RankImg from "../img/ranking-item.png";

function Rank() {
  return (
    <div className="rank-wrap">
      <div className="ranking-bar-title-box">
        <img src={RankImg} className="ranking-bar-title-ranking-item" />
        <div className="ranking-bar-title font-style">랭킹</div>
      </div>
      <div className="ranking-bar-classification">
        <div className="ranking-bar-classification-ranking font-style">
          순위
        </div>
        <div className="ranking-bar-classification-name-box">
          <div className="ranking-bar-classification-name font-style">이름</div>
        </div>
        <div className="ranking-bar-classification-content-name-box">
          <div className="ranking-bar-classification-content-name font-style">
            게시물 이름
          </div>
        </div>
        <div className="ranking-bar-classification-point-box">
          <div className="ranking-bar-classification-point font-style">
            하트 수
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rank;
