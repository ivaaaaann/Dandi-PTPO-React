import React from "react";
import "./MainContentContainer.css";
import FeedBar from "./FeedBar";
import FriendBar from "./FriendBar";

function MainContentContainer() {
  return (
    <section id="main-content">
      <div className="main-content">
        <FeedBar />
        <FriendBar />
      </div>
    </section>
  );
}

export default MainContentContainer;
