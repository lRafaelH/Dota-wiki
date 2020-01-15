import React, { Component } from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Table, Card, NavDropdown, Container } from "react-bootstrap";
import "../../design/topson.css";
class topson extends Component {
  render() {
    return (
      <div id="abedb" className="body">
        <Navbar bg="dark" variant="dark">
          <img
            width="30"
            height="30"
            className="d-inline-block
            align-top"
            alt="Dota-2-Log"
            src={require("../../images/dota-2-icon.png")}
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
        <div id="cont">
          <section id="main-bio">
            <h2>Topias Miikka Taavitsainen</h2>
            <img id="bio-image" src={require("../../images/topson.jpg")}></img>

            <h3>Team:OG</h3>
            <p>
              Topias Miikka "Topson" Taavitsainen is a Finnish professional Dota
              2 player who is currently playing for OG.
            </p>
            <h2 id="triv">Trivia</h2>
            <div id="qwe">
              <ul>
                <li>
                  On August 25th, 2019, he became the first two time TI-Winner,
                  after winning two consecutive TIs, TI8 and TI9. He achieved
                  this together with his teammates N0tail, Ceb, ana, and JerAx
                  on team OG.
                </li>
                <li>He's been playing Dota since he was 8 years old.</li>
                <li>He has seven older siblings and four younger siblings.</li>
                <li>
                  He studied to become a chef but he decided to quit to focus on
                  dota.
                </li>
              </ul>
            </div>
            <h2>Achievements</h2>
            <Table variant="dark" striped bordered hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Place</th>
                  <th>Tier</th>
                  <th>Tournament</th>
                  <th>Team</th>
                  <th>Result</th>
                  <th>Prize</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2019-09-27</td>
                  <td>4th</td>
                  <td>Major</td>
                  <td>Midas Mode 2 - Europe</td>
                  <td>OG</td>
                  <td>0/-/3</td>
                  <td>$5,000</td>
                </tr>
                <tr>
                  <td>2019-08-25</td>
                  <td>4th</td>
                  <td>Premier</td>
                  <td>The International 2019</td>
                  <td>OG</td>
                  <td>3 : 1</td>
                  <td>$15,620,200</td>
                </tr>
                <tr>
                  <td>2019-06-28</td>
                  <td>7 - 8th</td>
                  <td>Premier</td>
                  <td>EPICENTER Major</td>
                  <td>OG</td>
                  <td>0 : 2</td>
                  <td>$40,000</td>
                </tr>
                <tr>
                  <td>2019-05-11</td>
                  <td>5 - 6th</td>
                  <td>Premier</td>
                  <td>MDL Disneyland® Paris Major</td>
                  <td>OG</td>
                  <td>1 : 2</td>
                  <td>$60,000</td>
                </tr>
                <tr>
                  <td>2019-03-09</td>
                  <td>5 - 6th </td>
                  <td>Major</td>
                  <td>StarLadder ImbaTV Dota 2 Minor Season 1</td>
                  <td>OG</td>
                  <td>1 : 2</td>
                  <td>$15,000</td>
                </tr>
                <tr>
                  <td>2019-02-24</td>
                  <td>3rd</td>
                  <td>Major</td>
                  <td>ESL One Katowice 2019</td>
                  <td>OG</td>
                  <td>0 : 2</td>
                  <td>$35,000</td>
                </tr>
                <tr>
                  <td>2019-01-12</td>
                  <td>5 - 6th</td>
                  <td>Major</td>
                  <td>The Bucharest Minor</td>
                  <td>OG</td>
                  <td>1 : 2</td>
                  <td>$15,000</td>
                </tr>
                <tr>
                  <td>2019-01-05</td>
                  <td>2nd</td>
                  <td>Minor</td>
                  <td>WePlay! Dota 2 Winter Madness</td>
                  <td>OG</td>
                  <td>0 : 3 </td>
                  <td>$20,000</td>
                </tr>
                <tr>
                  <td>2018-08-25</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>The International 2018</td>
                  <td>OG</td>
                  <td>3 : 2</td>
                  <td>$11,234,200</td>
                </tr>
                <tr>
                  <td>2018-03-16</td>
                  <td>9 - 16th</td>
                  <td>Premier</td>
                  <td>World Electronic Sports Games 2017</td>
                  <td>Finland</td>
                  <td>1/-/2</td>
                  <td>$10,000</td>
                </tr>
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    );
  }
}

export default topson;
