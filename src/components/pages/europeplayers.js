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
import { Link } from "react-router-dom";
class europeplayers extends Component {
  render() {
    return (
      <div className="body">
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
                  alt="topson"
                  src={require("../images/topson.jpg")}
                />
                <Card.Body>
                  <Card.Title>Topson</Card.Title>
                  <Link className="link" to="/topson">
                    <Button block variant="secondary">
                      More info
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  alt="miracle"
                  src={require("../images/Miracle.jpg")}
                />
                <Card.Body>
                  <Card.Title>Miracle</Card.Title>
                  <Link className="link" to="/miracle">
                    <Button block variant="secondary">
                      More info
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Img
                  alt="w33"
                  variant="top"
                  src={require("../images/w33.jpg")}
                />
                <Card.Body>
                  <Card.Title>W33</Card.Title>

                  <Link className="link" to="/w33">
                    <Button block variant="secondary">
                      More info
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default europeplayers;
