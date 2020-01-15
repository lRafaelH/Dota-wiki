import React, { Component } from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Table, Card, NavDropdown, Container } from "react-bootstrap";
import "../../design/meracle.css";
class meracle extends Component {
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
            <h2>Galvin Kang Jian Wen</h2>
            <img id="bio-image" src={require("../../images/meracle.jpg")}></img>

            <h3>Team:Alpha x Hashtag</h3>
            <p>
              Galvin "Meracle" Kang Jian Wen is a Singaporean Dota 2 player who
              last played for Alpha x Hashtag. Meracle played DotA on and off
              for 4-5 years total, when he was 12 years old.[Citation needed] He
              is a "very quiet guy in real life", although he did the most
              talking for First Departure. He also enjoys buildings and creeps
              more than heroes, and enjoys playing heroes with a lot of
              illusions.[1] While on First Departure, Meracle would say in
              interviews that he was "still studying", due to his young age. He
              would often spend morning and afternoon at school and train with
              his team at night.[2]Around September 2012, Meracle left RoughNex
              to become the captain of First Departure with Hana, Lubby, Poloson
              and Meen. At age 17, he was one of the youngest captains in the
              professional scene. During The International 3 Eastern Qualifiers,
              Meracle continued to play captain for the team. In Game 2 of the
              series, Meracle played Io against Rattlesnake, creating several
              plays when Eastern teams did not draft Io. Despite beating
              Rattlesnake 2-1, they would eventually be knocked out by LGD and
              Rattlesnake, finishing third place in the group stage.After The
              International 3, Sylar was one of the first players to transfer
              teams, leaving LGD for RisingStars. After one month, Sylar left
              RisingStars, where he would be replaced by Meracle on October 31.
              KingJ stated that foreign talent was the best choice that
              RisingStars had, referring to the 2013 WPC ACE Dota 2
              League.[3]After playing with Titan for a week before his transfer,
              Meracle officially replaced Ice on November 30.[4] During this
              period, Titan were competing in G-League 2013. Against Team DK and
              Speed Gaming, Meracle drafted his famous Naga Siren[5][6], taking
              both one game off of both teams. Despite taking a single game off
              every team in the group, Titan finished last place in the group.
              After completing his mandatory national service, he later joined
              Mineski on the 25th August 2016.[7]
            </p>
            <h2 id="trivi">Trivia</h2>
            <div id="qwe">
              <ul>
                <li>
                  The "e" in Meracle is not a typo. It's a character in a game
                  that Meracle "likes a lot" (Meracle Chamlotte from Star
                  Ocean).
                </li>
                <li>
                  Is renowned for his split pushing. Enemy teams often fear his
                  Naga Siren play, first banning the hero against Meracle
                </li>
                <li>
                  Once said "Killing heroes doesn't win me the game, killing
                  buildings wins me the game."
                </li>
                <li>
                  He is sometimes confused with Miracle-, the Jordanian player.
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
                  <td>2019-11-25</td>
                  <td>1st</td>
                  <td>Minor</td>
                  <td>Hashtag Indy Tournament Season 2</td>
                  <td>Alpha x Hashtag</td>
                  <td>5/2/0 </td>
                  <td> $3,477</td>
                </tr>
                <tr>
                  <td>2019-07-27</td>
                  <td>4th</td>
                  <td>Major</td>
                  <td>DOTA Summit 10r</td>
                  <td>Complexity Gaming</td>
                  <td>0 : 2</td>
                  <td>$7,550</td>
                </tr>
                <tr>
                  <td>2019-05-09</td>
                  <td>9 - 12th</td>
                  <td>Premier</td>
                  <td>MDL Disneyland® Paris Major</td>
                  <td>Complexity Gaming</td>
                  <td>0 : 2</td>
                  <td>$15,000</td>
                </tr>
                <tr>
                  <td>2019-01-06</td>
                  <td>1st</td>
                  <td>Minor</td>
                  <td>
                    Asia Pacific Predator League 2019 Singapore Qualifier{" "}
                  </td>
                  <td>Chinster</td>
                  <td>2 : 1</td>
                  <td>$2,938</td>
                </tr>
                <tr>
                  <td>2018-05-18</td>
                  <td>9 - 10th </td>
                  <td>Premier</td>
                  <td>MDL Changsha Major</td>
                  <td>iG Vitality</td>
                  <td>0 : 1</td>
                  <td>$17,500</td>
                </tr>
                <tr>
                  <td>2018-04-22</td>
                  <td>3rd </td>
                  <td>Major</td>
                  <td>Dota2 Professional League Season 5 (2018 S1) - Top</td>
                  <td>iG Vitality</td>
                  <td>2 : 1 </td>
                  <td>$14,304</td>
                </tr>
                <tr>
                  <td>2017-12-09</td>
                  <td>3 - 4th</td>
                  <td>Major</td>
                  <td>ROG MASTERS 20178</td>
                  <td>WarriorsGaming.Unity</td>
                  <td>0 : 2 </td>
                  <td>$21,350</td>
                </tr>
                <tr>
                  <td>2017-01-25</td>
                  <td>1st</td>
                  <td>Minor</td>
                  <td>ProDota Cup Southeast Asia #4</td>
                  <td>Mineski</td>
                  <td>3 : 0 </td>
                  <td>$3,500</td>
                </tr>
                <tr>
                  <td>2016-11-12</td>
                  <td>3 - 4th</td>
                  <td>Major</td>
                  <td>ROG MASTERS 2016</td>
                  <td>Mineski</td>
                  <td>1 : 2 </td>
                  <td>$15,000</td>
                </tr>
                <tr>
                  <td>2016-07-29</td>
                  <td>1st</td>
                  <td>Minor</td>
                  <td>Mr. Cat Invitational</td>
                  <td>Mineski</td>
                  <td>2 : 0 </td>
                  <td>$5,000</td>
                </tr>
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    );
  }
}

export default meracle;
