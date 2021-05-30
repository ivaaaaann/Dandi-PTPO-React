import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import FriendBar from "./components/FriendBar";
import MyProfileBar from "./components/MyProfile";
import Rank from "./components/Rank";
import FeedBar from "./components/FeedBar";
import RankingBar from "./routes/RankingBar";

function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={FriendBar} />
      <Route path="/" exact={true} component={FeedBar} />
      <Route path="/rank" component={Rank} />
      <Route path="/rank" component={RankingBar} />
      <Route path="/myProfile" component={MyProfileBar} />
    </HashRouter>
  );
}

export default App;
