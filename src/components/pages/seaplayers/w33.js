import React, { Component } from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Table, NavDropdown, Container } from "react-bootstrap";
import "../../design/w33.css";
class w33 extends Component {
  render() {
    return (
      <div id="abedbd" className="body">
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
            <h2>Aliwi Omar</h2>
            <img id="bio-image" src={require("../../images/w33.jpg")}></img>

            <h3>Team:Nigma</h3>
            <p>
              w33's was born and raised in Romania with a Syrian father. Apart
              from Romanian, w33 is proficient in both English and Arabic. He
              began playing DotA in 2004, switching over to Dota 2 in 2011.
              Prior to pursuing a professional DotA career, w33 studied chemical
              engineering at university.Over time, w33 grew into a well-known
              pubstar. He obtained the highest MMR of any player for a
              significant amount of time, even becoming the first player to
              breach 8000 MMR. His first team was Balkan Bears, a team that he
              built with friends and other high-level players. Although the team
              failed to achieve good tournament results, w33 was able to
              showcase his exceptional ability at playing solo mid, going toe to
              toe with some of the top-tier mids. w33 became particularly known
              for his ability to play Meepo, who was considered a niche and
              unconventional pick. After Balkan Bears disbanded, w33 was invited
              to join the team MeePwn'd alongside veteran players such as H4nn1
              and pieliedie. However, the team did not manage to produce any
              significant results and disbanded two months after formation.
              However, w33 did not remain teamless for long, as he quickly
              returned to Balkan Bears. Two months later, w33 was offered to
              join 4 Clover & Lepricon with veterans such as Pajkatt and EGM.
              This time w33's team managed to produce some results, winning
              minor tournaments such as GIGABYTE Challenge #15 and MSI Dragon
              Battle 6. Three months later, w33 was invited by Puppey to be a
              part of a rebuilt Team Secret alongside EternaLEnVy, MiSeRy and
              pieliedie. During his time at Team Secret, w33 had large amounts
              of success. Much of this success came from w33's solo mid play on
              Windranger, Invoker, and Meepo. Team Secret won multiple
              premier-level LAN events such as the MLG World Finals and the
              Nanyang Dota 2 Championships. Although they were among the best
              teams in the world in terms of tournament performance at the time,
              they were upset in the first Dota 2 Major, the Frankfurt Major by
              OG, ending up in second place. After the major, Team Secret looked
              shaky but nevertheless continued onto the next major with the same
              roster, the Shanghai Major, which they won handily. Despite w33's
              solid solo mid performances during his time on the team, he was
              removed from the team in the post-Shanghai Major reshuffle. With
              not much time remaining before the next major's roster lock, w33
              was considered to be among the better free agents in the
              reshuffle. Alongside former Team Secret teammate MiSeRy, w33 was
              invited to join the American team Digital Chaos, who were
              rebuilding their team around the Ukrainian mid player Resolut1on.
              Despite early exits from previous competitions prior to the The
              International 2016, w33 believed that coming into the tournament
              they were the underdogs.[1] He believed that as underdogs, the
              pressure and expectation would be less and he would perform
              better. After an eventful series, he finished runners-up in the
              tournament, losing to Wings Gaming 3-1 in the grand finals.
              Following the International, w33 and his team sustained mixed
              success into the new year; victorious in ESL One Genting 2017 but
              several underperformances during the competitive season led to the
              departure of the team, and reformation to Thunderbirds. The
              reformation was short-lived and w33 spent a year playing for
              various European teams, later flying to Brazil to play for PaiN
              Gaming in April 2018.[2]np
            </p>
            <h2 id="trivi">Trivia</h2>
            <div id="qwe">
              <ul>
                <li>
                  On January 11th 2015, just one day after joining MeePwn'd, w33
                  was caught cheating during a match in the European Elite
                  League.[3] In the game, w33 used the cheat command -refresh,
                  leading to the incident being referred to as "w33fresh"
                </li>
                <li>His favorite hero is Skywrath Mage</li>
                <li>
                  Apart from Dota, his favorite games are Counter-Strike, which
                  he has played since version 1.4 (2002), as well as RPGs like
                  the Fallout series
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
                  <td>2019-08-25</td>
                  <td>2nd </td>
                  <td>Premier</td>
                  <td>The International 2019</td>
                  <td>Team Liquid</td>
                  <td>1 : 3</td>
                  <td>$4,462,910</td>
                </tr>
                <tr>
                  <td>2019-06-30</td>
                  <td>2nd</td>
                  <td>Premier</td>
                  <td>EPICENTER Major</td>
                  <td>Team Liquid</td>
                  <td>2 : 3 </td>
                  <td>$170,000</td>
                </tr>
                <tr>
                  <td>2018-05-27</td>
                  <td>3rd</td>
                  <td>Premier</td>
                  <td>ESL One Birmingham 2018</td>
                  <td>Pain Gaming</td>
                  <td>2 : 1</td>
                  <td>$100,000</td>
                </tr>
                <tr>
                  <td>22017-01-08</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>ESL One Genting 2017</td>
                  <td>Digital Chaos</td>
                  <td>3 : 2</td>
                  <td>$125,000</td>
                </tr>
                <tr>
                  <td>2016-12-10</td>
                  <td>3 - 4th</td>
                  <td>Premier</td>
                  <td>The Boston Major 2016</td>
                  <td>Digital Chaos</td>
                  <td>0 : 2</td>
                  <td>$250,000</td>
                </tr>
                <tr>
                  <td>2016-08-13</td>
                  <td>2nd</td>
                  <td>Premier</td>
                  <td>The International 2016</td>
                  <td>Digital Chaos</td>
                  <td>1 : 3</td>
                  <td>$3,427,130</td>
                </tr>
                <tr>
                  <td>2016-03-06</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>The Shanghai Major 2016</td>
                  <td>Team Secret</td>
                  <td>3 : 1 </td>
                  <td>$1,110,000</td>
                </tr>
                <tr>
                  <td>2015-11-21</td>
                  <td>2nd</td>
                  <td>Premier</td>
                  <td>The Frankfurt Major 2015</td>
                  <td>Team Secret</td>
                  <td>1 : 3 </td>
                  <td>$405,000</td>
                </tr>
                <tr>
                  <td>2015-11-01</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>Nanyang Dota 2 Championships </td>
                  <td>Team Secret</td>
                  <td>3 : 2</td>
                  <td>$105,688</td>
                </tr>
                <tr>
                  <td>2015-10-18</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>MLG World Finals</td>
                  <td>Team Secret</td>
                  <td>3 : 1 </td>
                  <td>$113,982</td>
                </tr>
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    );
  }
}

export default w33;
