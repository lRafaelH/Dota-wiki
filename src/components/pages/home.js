import React, { Component } from "react";
import { Card, Navbar, Nav, Col } from "react-bootstrap";
import { Button, Container, NavDropdown, Row } from "react-bootstrap";
import "../design/home.css";
class home extends Component {
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
          <Navbar.Brand id="logonav" href="/">
            Dota Players Wiki
          </Navbar.Brand>
          <Nav className="mr-auto">
            {" "}
            <Nav.Link href="#home">Money Ranking</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <NavDropdown title="Regions" id="basic-nav-dropdown">
              <NavDropdown.Item href="/seaplayers">SEA</NavDropdown.Item>
              <NavDropdown.Item href="/europeplayers">Europe</NavDropdown.Item>
              <NavDropdown.Item href="/">North America</NavDropdown.Item>
            </NavDropdown>
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

export default home;
