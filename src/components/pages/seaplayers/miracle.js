import React, { Component } from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Table, Card, NavDropdown, Container } from "react-bootstrap";
import "../../design/miracle.css";
class miracle extends Component {
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
            <Nav.Link href="#home">Money Ranking</Nav.Link>
            <Nav.Link href="#link">Search</Nav.Link>
            <NavDropdown title="Regions" id="basic-nav-dropdown">
              <NavDropdown.Item href="/seaplayers">SEA</NavDropdown.Item>
              <NavDropdown.Item href="/europeplayers">Europe</NavDropdown.Item>
              <NavDropdown.Item href="/">North America</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
        <div id="cont">
          <section id="main-bio">
            <h2>Amer Al-Barkawi</h2>
            <img id="bio-image" src={require("../../images/Miracle.jpg")}></img>

            <h3>Team:Nigma</h3>
            <p>
              Amer was born to a Polish mother and Jordanian father. He holds
              dual citizenship. Miracle- joined Balkan Bears at the beginning of
              2015, only to be removed from the team about four months later.
              While he was teamless, he began gaining recognition in the
              European scene by climbing the matchmaking rating leaderboards in
              pub games. Miracle- eventually became the #1 player by MMR in the
              European division and the world, surpassing w33. After achieving
              the #1 MMR ranking, he was invited by N0tail to join (monkey)
              Business, a new team formed from the post-TI5 reshuffle to compete
              in the upcoming Majors. The team reformed as OG after being
              sponsored. OG qualified for the first ever Dota 2 Major, the
              Frankfurt Major and managed to win the tournament in an unexpected
              series of upsets, with Miracle- showing high level performances on
              Shadow Fiend throughout the tournament. His impressive abilities
              prompted many other teams to respect ban the hero. After the
              Frankfurt Major, Miracle- later won numerous tournaments with OG
              during mid 2016, such as DreamLeague Season 5 and ESL Frankfurt
              2016, while also claiming his second Valve Major win at the Manila
              Major[1]. Despite OG being one of the favorites for winning The
              International 2016, they exited early in the tournament, losing to
              TnC Gaming in the second round of the lower brackets at the main
              stage, marking one of the biggest upsets in Dota 2
              history.[2]Following the International 2016, he departed the team
              and joined Team Liquid after FATA- announced his temporary break
              from professional Dota[3][4]. The new competitive season would
              start slow for Miracle- and his new team, when they failed to
              qualify for the Boston Major. However, after his friend GH joined
              the team early 2017, having already stood in for them during their
              victory at DreamLeague, Team Liquid found their way back to
              dominance at the top of competitive Dota 2. Together with his
              team, Miracle- went on to win several premier tournaments
              throughout 2017: StarSeries Season 3, StarLadder i-League
              Invitational #2, EPICENTER, and DreamLeague Season 7. Miracle-'s
              outstanding season culminated in his team's victory at The
              International 2017[5], where Team Liquid swept Newbee 3-0 in the
              Grand Finals.
            </p>
            <h2 id="trivi">Trivia</h2>
            <div id="qwe">
              <ul>
                <li>
                  e is only the second player to win a TI and 2 Valve Majors as
                  he won The Frankfurt and Manila Majors with OG and The
                  International 2017 with Team Liquid, a record only matched by
                  s4, Puppey and recently N0tail, JerAx and ana.
                </li>
                <li>
                  On May 11th, 2016, Miracle- became the first player in Dota 2
                  history to achieve a matchmaking rating of over 9000.[6] He
                  later won the eSports Rookie of the Year 2016 by the eSports
                  Industry Awards.[7]
                </li>
                <li>
                  Awarded as PC Player of the year by Esports Industry Awards
                  2017.
                </li>
              </ul>
            </div>
            <h2>Achievements</h2>
            <Table striped bordered hover>
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
                  <td>2018-08-24</td>
                  <td>4th</td>
                  <td>Premier</td>
                  <td>The International 2018</td>
                  <td>Team Liquid</td>
                  <td>0 : 2 </td>
                  <td>$1,787,250</td>
                </tr>
                <tr>
                  <td>2018-06-10</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>China Dota2 Supermajor</td>
                  <td>Team Liquid</td>
                  <td>3 : 2 </td>
                  <td>$555,000</td>
                </tr>
                <tr>
                  <td>2017-12-03</td>
                  <td>2nd</td>
                  <td>Premier</td>
                  <td>DreamLeague Season 8</td>
                  <td>Team Liquid</td>
                  <td>0 : 3</td>
                  <td>$200,000</td>
                </tr>
                <tr>
                  <td>2017-08-12</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>The International 2017</td>
                  <td>Team Liquid</td>
                  <td>3 : 0</td>
                  <td>$10,862,700</td>
                </tr>
                <tr>
                  <td>2017-06-11</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>EPICENTER 2017</td>
                  <td>Team Liquid</td>
                  <td>3 : 1</td>
                  <td>$250,000</td>
                </tr>
                <tr>
                  <td>2017-02-26</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>StarLadder i-League StarSeries Season 3 </td>
                  <td>Team Liquid</td>
                  <td>3 : 1</td>
                  <td>$135,000</td>
                </tr>
                <tr>
                  <td>2016-06-19</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>ESL One Frankfurt 2016</td>
                  <td>OG</td>
                  <td>3 : 0 </td>
                  <td>$157,273</td>
                </tr>
                <tr>
                  <td>2016-06-12</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>The Manila Major 2016</td>
                  <td>OG</td>
                  <td>3 : 1</td>
                  <td>$1,110,000</td>
                </tr>
                <tr>
                  <td>2015-11-21</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>The Frankfurt Major 2015</td>
                  <td>OG</td>
                  <td>3 : 1 </td>
                  <td>$1,110,000</td>
                </tr>
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    );
  }
}

export default miracle;
