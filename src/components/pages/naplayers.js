import React, { Component } from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Button, Card, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
class naplayers extends Component {
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
                <Card.Img variant="top" src={require("../images/sumail.jpg")} />
                <Card.Body>
                  <Card.Title>Sumail</Card.Title>
                  <Button block href="/sumail" variant="secondary" position>
                    More info
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={require("../images/bsj.jpg")} />
                <Card.Body>
                  <Card.Title>BSJ</Card.Title>
                  <Button href="/bsj" block variant="secondary">
                    More info
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={require("../images/ppd.jpg")} />
                <Card.Body>
                  <Card.Title>PPD</Card.Title>
                  <Button href="/ppd" block variant="secondary">
                    More info
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default naplayers;
