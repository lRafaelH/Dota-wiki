import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row
} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../design/home.css";
class home extends Component {
  componentDidMount() {
    if (!this.props.authenticated) {
      this.props.history.replace("/login");
    }
  }

  componentDidUpdate() {
    if (!this.props.authenticated) {
      this.props.history.replace("/login");
    }
  }
  render() {
    return (
      <body>
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
          <Nav className="mr-auto">
            {" "}
            <Nav.Link>
              <Link className="link" to="/search">
                Search
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/seaplayers">
                SEA
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/europeplayers">
                Europe
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/naplayers">
                NA
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <Row id="homerow">
            <Col>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../images/SEA-region.jpg")}
                />
                <Card.Body>
                  <Card.Title>South east Asia Region</Card.Title>
                  <Button block href="/seaplayers" variant="secondary" position>
                    Enter
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../images/NA-region.jpg")}
                />
                <Card.Body>
                  <Card.Title>North America Region</Card.Title>
                  <Button href="/naplayers" block variant="secondary">
                    Enter
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../images/eu-region.jpg")}
                />
                <Card.Body>
                  <Card.Title>Europe Region</Card.Title>
                  <Button href="/europeplayers" block variant="secondary">
                    Enter
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </body>
    );
  }
}

export default withRouter(home);
