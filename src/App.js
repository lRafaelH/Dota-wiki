// import React, { Component } from "react";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";
import Europeplayers from "./components/pages/europeplayers";
import Home from "./components/pages/home.js";
import Login from "./components/pages/Login";
import naplayers from "./components/pages/naplayers";
import Register from "./components/pages/Register";
import seaplayers from "./components/pages/seaplayers";
import abed from "./components/pages/seaplayers/abed";
import bsj from "./components/pages/seaplayers/bsj";
import march from "./components/pages/seaplayers/march";
import meracle from "./components/pages/seaplayers/meracle";
import miracle from "./components/pages/seaplayers/miracle";
import ppd from "./components/pages/seaplayers/ppd";
import sumail from "./components/pages/seaplayers/sumail";
import topson from "./components/pages/seaplayers/topson";
import w33 from "./components/pages/seaplayers/w33";
import search from "./components/pages/search";
import { Button } from "react-bootstrap";
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Router>
      <Route exact path="/">
        {" "}
        <Home
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        ></Home>
      </Route>
      <Route exact path="/europeplayers">
        <Europeplayers></Europeplayers>
      </Route>
      <Route exact path="/login">
        <Login setAuthenticated={setAuthenticated}></Login>
      </Route>
      <Route exact path="/register">
        <Register></Register>
      </Route>
    </Router>
  );
}

export default App;
