import React, { Component } from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Button, Card, NavDropdown, Container } from "react-bootstrap";
import "../design/seaplayers.css";
class seaplayers extends Component {
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
            src={require("../../components/images/dota-2-icon.png")}
          />{" "}
          <Navbar.Brand id="logonav" href="/">
            Dota Players Wiki
          </Navbar.Brand>
          <Nav className="mr-auto">
            {" "}
            <Nav.Link data-toggle="modal" href="/search" data-target="#mymodal">
              Search
            </Nav.Link>
            <NavDropdown title="Regions" id="basic-nav-dropdown">
              <NavDropdown.Item href="/seaplayers">SEA</NavDropdown.Item>
              <NavDropdown.Item href="/europeplayers">Europe</NavDropdown.Item>
              <NavDropdown.Item href="/naplayers">
                North America
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Container>
          <Row id="homerow">
            <Col>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../images/AbedSea.jpg")}
                />
                <Card.Body>
                  <Card.Title>Abed</Card.Title>
                  <Button block href="/abed" variant="secondary" position>
                    More info
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../images/meracle.jpg")}
                />
                <Card.Body>
                  <Card.Title>Meracle</Card.Title>
                  <Button href="/meracle" block variant="secondary">
                    More info
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card bg="dark" text="white" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../images/MarchSea.jpg")}
                />
                <Card.Body>
                  <Card.Title>March</Card.Title>
                  <Button href="/march" block variant="secondary">
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

export default seaplayers;
