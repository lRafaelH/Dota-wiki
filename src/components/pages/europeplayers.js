import React, { Component } from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Button, Card, NavDropdown, Container } from "react-bootstrap";
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
          <Navbar.Brand id="logonav" href="/">
            Dota Players Wiki
          </Navbar.Brand>
          <Nav className="mr-auto">
            {" "}
            <Nav.Link href="#home">Money Ranking</Nav.Link>
            <Nav.Link href="#link">Search</Nav.Link>
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
                <Card.Img variant="top" src={require("../images/topson.jpg")} />
                <Card.Body>
                  <Card.Title>Topson</Card.Title>
                  <Button block href="/Topson" variant="secondary" position>
                    Enter
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../images/Miracle.jpg")}
                />
                <Card.Body>
                  <Card.Title>Miracle</Card.Title>
                  <Button href="/miracle" block variant="secondary">
                    Enter
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={require("../images/w33.jpg")} />
                <Card.Body>
                  <Card.Title>W33</Card.Title>
                  <Button href="/w33" block variant="secondary">
                    Enter
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

export default europeplayers;
