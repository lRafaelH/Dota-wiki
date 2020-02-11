import axios from "axios";
import React, { Component } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

class Login extends Component {
  // state = {
  //   username: "",
  //   password: ""
  // };
  // handleSubmit = event => {
  //   event.preventDefault();

  //   const user = {
  //     username: this.state.username
  //   };

  //   axios.post("localhost:8080/test/login", { user }).then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   });
  // };

  state = {
    username: "",
    password: ""
  };

  usernameChangedHandler = event => {
    this.setState({ username: event.target.value });
  };

  passwordChangedHandler = event => {
    this.setState({ password: event.target.value });
  };

  quas = () => {
    axios
      .post("http://localhost:8080/test/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then((response: AxiosResponse<T>) => {
        this.props.setAuthenticated(true);
        this.props.history.push("/home");
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

        <div class="box">
          <h1 class="hlogin">Login</h1>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.usernameChangedHandler}
            id="logint"
            placeholder="username"
          />
          <input
            value={this.state.password}
            onChange={this.passwordChangedHandler}
            type="password"
            id="passt"
            name="password"
            placeholder="password"
          />
          <Button onClick={this.quas} id="signin" variant="success">
            Sign In
          </Button>
          <Link to="/register">
            <Button id="signup" variant="primary">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
