import React, { Component } from "react";
import { FormControl, Navbar, Nav, Col, Container } from "react-bootstrap";
import { Button, Card, InputGroup, NavDropdown, Row } from "react-bootstrap";
class search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
            <Nav.Link data-toggle="modal" data-target="#mymodal">
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
        <br></br>
        <Container>
          <InputGroup id="myinput" type="text" className="mb-3">
            <FormControl
              placeholder="Search by name..."
              aria-label="Search by name..."
              aria-describedby="basic-addon2"
              onChange={this.handleChange}
              value={this.state.searchInput}
              name="searchInput"
            />
            <InputGroup.Append>
              <Button variant="secondary">Button</Button>
            </InputGroup.Append>
          </InputGroup>
          {/* <form class="form-inline">
            <button
              type="button"
              class="btn btn-primary btn-lg mr-3"
              id="btnSort"
            >
              Sort
            </button>
            <input
              class="form-control form-control-lg mr-sm-2"
              type="search"
              placeholder="Type a name"
              aria-label="Search"
              id="search"
            ></input>
          </form> */}
        </Container>
        <div class="card-deck">
          <Container>
            <Row id="homerow">
              <Col>
                <Card
                  id="abed"
                  bg="dark"
                  text="white"
                  style={{ width: "18rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={require("../images/AbedSea.jpg")}
                  />
                  <Card.Body>
                    <Card.Title className="names">Abed</Card.Title>
                    <Button block href="/abed" variant="secondary" position>
                      Enter
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card
                  id="meracle"
                  bg="dark"
                  text="white"
                  style={{ width: "18rem" }}
                >
                  <Card.Img
                    height="300"
                    variant="top"
                    src={require("../images/meracle.jpg")}
                  />
                  <Card.Body>
                    <Card.Title>Meracle</Card.Title>
                    <Button href="/meracle" block variant="secondary">
                      Enter
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  id="march"
                  bg="dark"
                  text="white"
                  style={{ width: "18rem" }}
                >
                  <Card.Img
                    variant="top"
                    src={require("../images/MarchSea.jpg")}
                  />
                  <Card.Body>
                    <Card.Title>March</Card.Title>
                    <Button href="/march" block variant="secondary">
                      Enter
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row id="homerow">
              <Col>
                <Card bg="dark" text="white" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={require("../images/sumail.jpg")}
                  />
                  <Card.Body>
                    <Card.Title>Sumail</Card.Title>
                    <Button block href="/sumail" variant="secondary" position>
                      Enter
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
                      Enter
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
                      Enter
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row id="homerow">
              <Col>
                <Card bg="dark" text="white" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={require("../images/topson.jpg")}
                  />
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
      </body>
    );
  }
}
export default search;
