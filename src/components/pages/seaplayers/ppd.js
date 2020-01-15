import React, { Component } from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Table, Card, NavDropdown, Container } from "react-bootstrap";
import "../../design/abed.css";
class ppd extends Component {
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
            <h2>Peter Dager</h2>
            <img id="bio-image" src={require("../../images/ppd.jpg")}></img>

            <h3>Team:Ninjas in Pyjamas</h3>
            <p>
              Peter "ppd" Dager is an American professional Dota 2 player who is
              currently the captain of Ninjas in Pyjamas. He is best known for
              his time playing for Evil Geniuses, during which he captained the
              team to a victory at The International 2015. He also spent a year
              working as the CEO of Evil Geniuses.he team continued to do well,
              with a 3rd place finish at the Shanghai Major. After the
              tournament, however, EG underwent a roster change, with Bulba and
              Aui_2000 from Digital Chaos replacing Universe and Arteezy. The
              new roster began to falter, which culminated in back-to-back last
              place finishes at EPICENTER and The Manila Major. After the major,
              the team opted to forego a direct invite to The International, and
              replaced Aui and Bulba with zai and Universe. The new roster had a
              strong showing at The International 2016 Qualifiers, and EG became
              the first team to qualify from the Americas region. Evil Geniuses
              had an impressive run through the upper bracket of The
              International 2016, scoring 2-0 victories over Chinese favorites
              Newbee and EHOME. Ironically, EG would then drop into the lower
              bracket after a 0-2 loss to Wings, where they were then eliminated
              by underdogs Digital Chaos, taking 3rd overall. Following The
              International 2016, ppd decided to leave active competitive play
              in order to take a managerial role within Evil Geniuses and
              Twitch. [13] Despite the move, ppd did not offically rule out
              player retirement, citing he may return as a professional player.
              [14] On December 12th, 2016, ppd was named CEO of Evil Geniuses
              after EG and their sister company, Alliance, became independent
              player-owned organizations.Following the new year, PPD later
              joined WanteD for the upcoming Major. He stated however that this
              was not a full-time team and will prioritize his administrative
              duties when required. [16] PPD also began appearing behind the
              analyst desk more frequently, taking casting and panelist
              positions at tournaments such as DAC 2017, The Summit 7, and The
              International 2017. PPD also began a podcast on his youtube
              channel with his inaugural interviewee being Bulba. In August of
              2017, following the conclusion of The International 2017, ppd
              stepped down as the CEO of Evil Geniuses and left the
              organisation. [2] His subsequent venture saw him back into
              professional Dota as a player alongside notable freelance players
              such as Zai, Pajkatt, CCnC and MiSeRy, where it was unveiled
              through Zai's twitter post. [17] The unveiled team called The Dire
              was later picked up by OpTic Gaming . [18] He won his first
              tournament with the squad at Starladder i-League Invitation Season
              5 beating VGJ.Thunder 3-1 in the grand finals, picking up 150 DPC
              points. [19] In efforts to improve the grassroots for the
              competitive North American Scene, ppd created the North American
              Dota Challengers League (NADCL) in early July.[20] Following an
              7-8th place finish at The International 2018, ppd departed the
              organisation and moved to Europe to form Ninjas in Pyjamas.
              [21][22]
            </p>
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
                  <td>2018-05-27</td>
                  <td>2nd </td>
                  <td>Premier</td>
                  <td>ESL One Birmingham 2018</td>
                  <td>Optic Gaming</td>
                  <td>0 : 3</td>
                  <td>$200,000</td>
                </tr>
                <tr>
                  <td>2016-08-13</td>
                  <td>3rd</td>
                  <td>Premier</td>
                  <td>The International 2016</td>
                  <td>Evil Geniuses</td>
                  <td>1 : 2</td>
                  <td>$2,180,900</td>
                </tr>
                <tr>
                  <td>2016-03-06</td>
                  <td>3rd</td>
                  <td>Premier</td>
                  <td>The Shanghai Major 2016</td>
                  <td>Evil Geniuses</td>
                  <td>0 : 2</td>
                  <td>$315,000</td>
                </tr>
                <tr>
                  <td>2015-11-21</td>
                  <td>3rd</td>
                  <td>Premier</td>
                  <td>The Frankfurt Major 2015</td>
                  <td>Evil Geniuses</td>
                  <td>1 : 2</td>
                  <td>$315,000</td>
                </tr>
                <tr>
                  <td>2015-08-08</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>The International 2015</td>
                  <td>Evil Geniuses</td>
                  <td>3 : 1</td>
                  <td>$6,634,660</td>
                </tr>
                <tr>
                  <td>2015-07-12</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>Dota Pit League Season 3</td>
                  <td>Evil Geniuses</td>
                  <td>3 : 0</td>
                  <td>$126,055</td>
                </tr>
                <tr>
                  <td>2015-02-09</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>Dota 2 Asia Championships 2015</td>
                  <td>Evil Geniuses</td>
                  <td>3 : 0</td>
                  <td>$1,284,160</td>
                </tr>
                <tr>
                  <td>2014-10-26</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>StarLadder StarSeries Season 10</td>
                  <td>Evil Geniuses</td>
                  <td>3 : 2 </td>
                  <td>$105,291</td>
                </tr>
                <tr>
                  <td>2014-09-07</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>World E-sport Championships 2014</td>
                  <td>Evil Geniuses</td>
                  <td>4 : 1</td>
                  <td>$97,702</td>
                </tr>
                <tr>
                  <td>2014-07-20</td>
                  <td>3rd</td>
                  <td>Premier</td>
                  <td>The International 2014</td>
                  <td>Evil Geniuses</td>
                  <td>1 : 2 </td>
                  <td>$1,037,780</td>
                </tr>
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    );
  }
}

export default ppd;
