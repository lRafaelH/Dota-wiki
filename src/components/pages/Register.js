import React, { Component } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  usernameChangedHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  passwordChangedHandler = event => {
    this.setState({
      password: event.target.value
    });
  };

  register = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/test/register", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        this.props.history.push("/login");
        alert(response.data);
      })
      .catch(err => {
        alert(err.response.data);
      });
  };

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
        <form>
          <div class="box">
            <h1 class="hlogin">Register</h1>
            <input
              minlength="6"
              maxlength="12"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.usernameChangedHandler}
              id="logint"
              placeholder="CHOOSE A USERNAME"
              required
            />
            <input
              type="password"
              name="password"
              id="passt"
              value={this.state.password}
              onChange={this.passwordChangedHandler}
              placeholder="PASSWORD"
              required
              minlength="6"
              maxlength="12"
            />
            <Button
              type="submit"
              onClick={this.register}
              id="signin"
              variant="success"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(Register);
