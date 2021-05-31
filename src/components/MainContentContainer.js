import React from "react";
import "./MainContentContainer.css";
import FeedBar from "./FeedBar";
import FriendBar from "./FriendBar";
import MenuBar from "./MenuBar";

function MainContentContainer() {
  return (
    <section id="main-content">
      <div className="main-content">
        <FeedBar />
        <MenuBar />
      </div>
    </section>
  );
}

export default MainContentContainer;
