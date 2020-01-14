import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import home from "./components/pages/home.js";
import seaplayers from "./components/pages/seaplayers";
import abed from "./components/pages/seaplayers/abed";
import meracle from "./components/pages/seaplayers/meracle";
import march from "./components/pages/seaplayers/march";
import europeplayers from "./components/pages/europeplayers";
import topson from "./components/pages/seaplayers/topson";
import miracle from "./components/pages/seaplayers/miracle";
import w33 from "./components/pages/seaplayers/w33";
import naplayers from "./components/pages/naplayers";
import sumail from "./components/pages/seaplayers/sumail";
import ppd from "./components/pages/seaplayers/ppd";
import bsj from "./components/pages/seaplayers/bsj";
import search from "./components/pages/search";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
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
