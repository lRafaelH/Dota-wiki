import React, { Component } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
class register extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <img
            width="30"
            height="30"
            className="d-inline-block
            align-top"
            alt="Dota-2-Log"
            src={require("../images/dota-2-icon.png")}
          />{" "}
          <Navbar.Brand id="logonav">
            <Link className="link" to="/">
              Dota Players Wiki
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto"> </Nav>
        </Navbar>
        <br></br>

        <div class="box">
          <h1 class="hlogin">Register</h1>
          <input
            type="text"
            name="username"
            id="logint"
            placeholder="CHOOSE A USERNAME"
          />
          <input
            type="password"
            name="password"
            id="passt"
            placeholder="PASSWORD"
          />
          <input
            type="password"
            name="confirm pass"
            id="passt"
            placeholder="CONFIRM PASSWORD"
          />
          <Button id="signin" variant="success">
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
export default register;
