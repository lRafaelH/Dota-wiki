import React, { Component } from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Table, Card, NavDropdown, Container } from "react-bootstrap";
import "../../design/abed.css";
import { Link } from "react-router-dom";
class abed extends Component {
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
          <Navbar.Brand id="logonav">
            <Link className="link" to="/">
              Dota Players Wiki
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            {" "}
            <Nav.Link data-toggle="modal" data-target="#mymodal">
              <Link className="link" to="/search">
                Search
              </Link>
            </Nav.Link>
            <NavDropdown title="Regions" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="link" to="/seaplayers">
                  SEA
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link" to="/europlayers">
                  Europe
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link" to="/naplayers">
                  North America
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
        <div id="cont">
          <section id="main-bio">
            <h2>Abed Azel L. Yusop</h2>
            <img id="bio-image" src={require("../../images/AbedSea.jpg")}></img>

            <h3>Team:Evil Geniuses</h3>
            <p>
              a Filipino professional Dota 2 player who currently plays for Evil
              Geniuses. Abed was born and raised in Dasmarinas in the province
              of Cavite, Philippines. His parents own a small internet cafe
              close to their home. Abed has one older brother, Ahmed Rheeza.
              Abed started playing Dota 2 in 2014 and became known through the
              South-East Asian MMR leaderboards with his signature heroes Meepo
              and Invoker. In early 2015 he joined his first professional team
              MSI-EvoGT, shortly after rebranded to Trackmate, where he competed
              in MPGL Season 7 in March 2015 and later played alongside the
              Australian-based squad, Can't Say Wips.[1] RR scouted him as a
              potential player and invited him to join Execration in 2015 but
              Abed denied the request to due to school commitments. Execration
              contacted Abed in January 2016 and with the support from his
              father he joined the organisation.[2][1] After failing to qualify
              for premier events during mid 2016, he later competed at The
              International 2016 and produced a 18-0 on Meepo against compLexity
              Gaming during the wildcard stages, exhibiting his mechanical skill
              reaching 1200 XPM and 900 GPM, sending compLexity to an early exit
              in the tournament.[3] In the following round, he lost to to Escape
              Gaming and during the Post TI6 shuffle, he won his first premier
              tournament, beating MVP Phoenix 2-0 in the grand finals of the
              MPGL Southeast Asian Championship on September 11, 2016. He left
              the organization on December 30th.[4] Abed and Team Onyx qualified
              for The Kiev Major, winning the North America Qualifier by
              defeating complexity Gaming, with Abed's signature Meepo.[5] In
              June 2017 Abed qualified for The International 2017 with Digital
              Chaos, by winning the North America qualifier finals against Team
              Freedom with 3-0.
            </p>
            <h2 id="trivi">Trivia</h2>
            <div id="qwe">
              <ul>
                <li>His favorite fruit is grapes.</li>
                <li>His favorite color is white.</li>
                <li>His favorite dota player is s4.</li>
                <li>Abed reached 8000 MMR on August 6th, 2016.</li>
                <li>
                  Abed reached 9000 MMR on March 19th, 2017, becoming the first
                  Filipino to reach the milestone.
                </li>
                <li>
                  On June 25th, 2017, Abed became the first player to reach
                  10,000 solo MMR.
                </li>
                <li>
                  On June 18th, 2019, Abed became the first player to reach
                  10,000 solo MMR under Valve’s new Medal system.
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
                  <td>2019-12-22</td>
                  <td>2nd </td>
                  <td>Premier</td>
                  <td>ONE Esports Dota 2 World Pro Invitational Singapore</td>
                  <td>Evil Geniuses</td>
                  <td>0 : 3</td>
                  <td>$100,000</td>
                </tr>
                <tr>
                  <td>2019-11-23</td>
                  <td>4th</td>
                  <td>Premier</td>
                  <td>MDL Chengdu Major</td>
                  <td>Evil Geniuses</td>
                  <td>1 : 2</td>
                  <td>$80,000</td>
                </tr>
                <tr>
                  <td>2019-08-20</td>
                  <td>13 - 16th</td>
                  <td>Premier</td>
                  <td>The International 2019</td>
                  <td>Fanatic</td>
                  <td>0 : 1</td>
                  <td>$514,951</td>
                </tr>
                <tr>
                  <td>2019-03-24</td>
                  <td>3rd</td>
                  <td>Premier</td>
                  <td>DreamLeague Season 11</td>
                  <td>Fanatic</td>
                  <td>1 : 2</td>
                  <td>$100,000</td>
                </tr>
                <tr>
                  <td>2018-05-27</td>
                  <td>4th</td>
                  <td>Premier</td>
                  <td>ESL One Birmingham 2018</td>
                  <td>Fanatic</td>
                  <td>1 : 2</td>
                  <td>$60,000</td>
                </tr>
                <tr>
                  <td>2018-03-25</td>
                  <td>2nd</td>
                  <td>Major</td>
                  <td>DreamLeague Season 9</td>
                  <td>Fanatic</td>
                  <td>0 : 3</td>
                  <td>$70,000</td>
                </tr>
                <tr>
                  <td>2018-02-25</td>
                  <td>4th</td>
                  <td>Premier</td>
                  <td>ESL One Katowice 2018</td>
                  <td>Fanatic</td>
                  <td>1 : 2</td>
                  <td>$80,000</td>
                </tr>
                <tr>
                  <td>2017-12-17</td>
                  <td>2nd</td>
                  <td>Major</td>
                  <td>DOTA Summit 8</td>
                  <td>Fanatic</td>
                  <td>1 : 3 </td>
                  <td>$60,000</td>
                </tr>
                <tr>
                  <td>2017-08-09</td>
                  <td>9 - 12th</td>
                  <td>Premier</td>
                  <td>The International 2017</td>
                  <td>Digital Chaos</td>
                  <td>0 : 2</td>
                  <td>$370,319</td>
                </tr>
                <tr>
                  <td>2016-09-11</td>
                  <td>1st</td>
                  <td>Major</td>
                  <td>MPGL Southeast Asian Championship</td>
                  <td>Execration</td>
                  <td>2 : 0 </td>
                  <td>$30,000</td>
                </tr>
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    );
  }
}

export default abed;
