import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import FriendBar from "./components/FriendBar";
import MyProfileBar from "./components/MyProfile";
import Rank from "./routes/Rank";

function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={FriendBar} />
      <Route path="/rank" component={Rank} />
      <Route path="/myProfile" component={MyProfileBar} />
    </HashRouter>
  );
}

export default App;
