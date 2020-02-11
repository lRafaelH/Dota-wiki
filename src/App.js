import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import europeplayers from "./components/pages/europeplayers";
import home from "./components/pages/home.js";
import Login from "./components/pages/Login";
import naplayers from "./components/pages/naplayers";
import register from "./components/pages/register";
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

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/register" component={register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/seaplayers" component={seaplayers} />
          <Route exact path="/abed" component={abed} />
          <Route exact path="/meracle" component={meracle} />
          <Route exact path="/march" component={march} />
          <Route exact path="/europeplayers" component={europeplayers} />
          <Route exact path="/topson" component={topson} />
          <Route exact path="/miracle" component={miracle} />
          <Route exact path="/w33" component={w33} />
          <Route exact path="/naplayers" component={naplayers} />
          <Route exact path="/sumail" component={sumail} />
          <Route exact path="/ppd" component={ppd} />
          <Route exact path="/bsj" component={bsj} />
          <Route exact path="/search" component={search} />
        </Switch>
      </Router>
    );
  }
}

export default App;
