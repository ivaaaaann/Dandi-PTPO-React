import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import FriendBar from "./components/FriendBar";
import Rank from "./routes/Rank";

function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={FriendBar} />
      <Route path="/rank" component={Rank} />
    </HashRouter>
  );
}

export default App;
