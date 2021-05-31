import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MyProfileBar from "./components/MyProfile";
import RankContainer from "./components/RankContainer";
import MainContentContainer from "./components/MainContentContainer";

function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={MainContentContainer} />
      <Route path="/rank" component={RankContainer} />
      <Route path="/myProfile" component={MyProfileBar} />
    </HashRouter>
  );
}

export default App;
