import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
class search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      players: [
        {
          name: "Abed",
          imageSource: "AbedSea",
          link: "abed"
        },
        {
          name: "Meracle",
          imageSource: "meracle",
          link: "meracle"
        },
        {
          name: "March",
          imageSource: "MarchSea",
          link: "march"
        },
        {
          name: "BSJ",
          imageSource: "bsj",
          link: "bsj"
        },
        {
          name: "Sumail",
          imageSource: "sumail",
          link: "sumail"
        },
        {
          name: "W33",
          imageSource: "w33",
          link: "w33"
        },
        {
          name: "Topson",
          imageSource: "topson",
          link: "topson"
        },
        {
          name: "Miracle",
          imageSource: "Miracle",
          link: "miracle"
        },
        {
          name: "Ppd",
          imageSource: "ppd",
          link: "ppd"
        }
      ]
    };

    this.playersList = [
      {
        name: "Abed",
        imageSource: "AbedSea",
        link: "abed"
      },
      {
        name: "Meracle",
        imageSource: "meracle",
        link: "meracle"
      },
      {
        name: "March",
        imageSource: "MarchSea",
        link: "march"
      },
      {
        name: "BSJ",
        imageSource: "bsj",
        link: "bsj"
      },
      {
        name: "Sumail",
        imageSource: "sumail",
        link: "sumail"
      },
      {
        name: "W33",
        imageSource: "w33",
        link: "w33"
      },
      {
        name: "Topson",
        imageSource: "topson",
        link: "topson"
      },
      {
        name: "Miracle",
        imageSource: "Miracle",
        link: "miracle"
      },
      {
        name: "Ppd",
        imageSource: "ppd",
        link: "ppd"
      }
    ];
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchInput === "") {
      this.setState({
        players: this.playersList
      });
    } else {
      let searchedPlayer = this.playersList.filter(
        player => player.name.toLowerCase() === this.state.searchInput
      );

      this.setState({
        players: searchedPlayer
      });
    }
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
        <br></br>
        <Container>
          <form class="form-inline" onSubmit={this.handleSubmit}>
            <input
              class="form-control form-control-lg mr-sm-2"
              type="search"
              placeholder="Type a name"
              aria-label="Search"
              name="searchInput"
              onChange={this.handleChange}
              value={this.state.searchInput}
            ></input>{" "}
            <button
              class="btn btn-primary btn-lg mr-3"
              id="btnSort"
              type="submit"
            >
              Search
            </button>
          </form>
        </Container>
        <div class="card-deck">
          <Container>
            <div>
              {this.state.players.map(player => (
                <Card
                  className="cards"
                  bg="dark"
                  text="white"
                  style={{ width: "18rem" }}
                >
                  <Card.Img
                    height="250"
                    variant="top"
                    src={require(`../images/${player.imageSource}.jpg`)}
                  />
                  <Card.Body>
                    <Card.Title>{player.name}</Card.Title>
                    <Link to={`/${player.link}`}>
                      <Button
                        block
                        // href={`/${player.link}`}
                        variant="secondary"
                        position
                      >
                        More Info
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Container>
        </div>
      </body>
    );
  }
}
export default search;
