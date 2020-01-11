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
        </Switch>
      </Router>
    );
  }
}

export default App;
