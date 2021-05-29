import Recat from "react";
import "./Rank.css";
import RankImg from "../img/ranking-item.png";

function Rank() {
  return (
    <section id="ranking-main-content">
      <div class="ranking-main-content">
        <div class="ranking-bar">
          <div class="ranking-bar-title-box">
            <img src={RankImg} class="ranking-bar-title-ranking-item" />
            <div class="ranking-bar-title font-style">랭킹</div>
          </div>
          <div class="ranking-bar-classification">
            <div class="ranking-bar-classification-ranking font-style">
              순위
            </div>
            <div class="ranking-bar-classification-name-box">
              <div class="ranking-bar-classification-name font-style">이름</div>
            </div>
            <div class="ranking-bar-classification-content-name-box">
              <div class="ranking-bar-classification-content-name font-style">
                게시물 이름
              </div>
            </div>
            <div class="ranking-bar-classification-point-box">
              <div class="ranking-bar-classification-point font-style">
                하트 수
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rank;
