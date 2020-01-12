import React, { Component } from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Table, Card, NavDropdown, Container } from "react-bootstrap";
import "../../design/abed.css";
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
            <h2>Brian Canavan</h2>
            <img id="bio-image" src={require("../../images/bsj.jpg")}></img>

            <h3>Team:ROOONS</h3>
            <p>
              BSJ began playing Dota 2 shortly before The International 2012. He
              entered the competitive scene in early 2015, after achieving the
              number one rank in the NADotA Elite League. He was picked up by
              DeMoN with his team Summer's Rift. The team had some mild success,
              qualifying for his first LAN in May of that year. However, the
              team would end up finishing last place. A month later, issues
              within the team sparked an unpleasant disband of the team a month
              later after failing to qualify for TI5. Since then, BSJ has
              continued to stream on Twitch for Complexity Gaming. He has had
              some experience with professional teams while doing so, including
              Team Freedom. Undeterred from the lack of success, BSJ made his
              own resurgence of Team Leviathan for the 2017-18 DPC year. Through
              the second half of 2017, the team would surprise some of the
              established NA teams in the major and minor qualifiers. The most
              notable result was when they knocked off Evil Geniuses in the
              Starladder i-League Invitational #3 NA qualifiers. However, the
              team never managed to breakthrough against the rest of the NA Dota
              scene. Issues with lack of practicing among the players, Leviathan
              would disband at the end of 2017. BSJ was later picked up by
              VGJ.Storm with good friend monkeys-forever in early 2018.
              Unfortunately, the team never managed to qualify for a DPC event,
              and was disbanded only a month later. Despite not having a team
              for the rest of the DPC season, BSJ enjoyed analyzing and casting
              at DPC events such as The Summit 8 and 9, MDL Changsha, and The
              International 2018. People may recognize him casting frequently
              with other notable NA casters Kyle and GrandGrant. The beginning
              of the 2018 DPC season treated BSJ well. Reuniting with former
              teammates Jubei and monkeys-forever, their new team ROOONS
              qualified for DreamLeague Season 10 and the inaugural season of
              the North American Dota Challengers League. Through these
              accomplishments, ROOONS found themselves invited to a few other
              notable LAN's, such as Red Bull Guardians and the World Showdown
              of Esports. The results were lackluster, finishing dead last in
              each of these tournaments, and by participating in these LAN's
              made them forfeit the NADCL season due to scheduling conflicts.
            </p>
            <h2 id="trivi">Trivia</h2>
            <div id="qwe">
              <ul>
                <li>In May 2017 BSJ was added to the compLexity stream team</li>
                <li>Has a degree in Biomedical Engineering</li>
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
                  <td>2019-06-06 </td>
                  <td>1st </td>
                  <td>Show M.</td>
                  <td>Twitch Rivals Showdown</td>
                  <td>Team Admiral Bulldog</td>
                  <td>2 : 0</td>
                  <td>$19,000</td>
                </tr>
                <tr>
                  <td>2018-11-01</td>
                  <td>7 - 8th</td>
                  <td>Major</td>
                  <td>ROOONS 10</td>
                  <td>Evil Geniuses</td>
                  <td>0 : 2</td>
                  <td>$7,500</td>
                </tr>
                <tr>
                  <td>2018-10-20</td>
                  <td>3 - 4th</td>
                  <td>Minor</td>
                  <td>Red Bull Guardians</td>
                  <td>ROOONS</td>
                  <td>1 : 2</td>
                  <td>$5,000</td>
                </tr>
                <tr>
                  <td>2018-10-14</td>
                  <td>7 - 8th</td>
                  <td>Major</td>
                  <td>World Showdown of Esports #1</td>
                  <td>ROOONS</td>
                  <td>0/-/3</td>
                  <td>$2,000</td>
                </tr>
                <tr>
                  <td>2017-12-02</td>
                  <td>1st</td>
                  <td>Minor</td>
                  <td>joinDOTA League Season 11 America</td>
                  <td>Team Leviathan</td>
                  <td>3 : 0</td>
                  <td>$2,000</td>
                </tr>
                <tr>
                  <td>2017-11-16</td>
                  <td>1st</td>
                  <td>Minor</td>
                  <td>Blood in the Streets Americas</td>
                  <td>Team Leviathan</td>
                  <td>3 : 1 </td>
                  <td>$5,000</td>
                </tr>
                <tr>
                  <td>2017-11-16</td>
                  <td>1st</td>
                  <td>Minor</td>
                  <td>ProDotA Cup Americas #8</td>
                  <td>Team Freedom</td>
                  <td>3 : 0</td>
                  <td>$3,500</td>
                </tr>
                <tr>
                  <td>2016-11-30</td>
                  <td>2nd</td>
                  <td>Minor</td>
                  <td>ProDotA Cup Americas #7</td>
                  <td>Team Freedom</td>
                  <td>2 : 3</td>
                  <td>$1,000</td>
                </tr>
                <tr>
                  <td>2015-05-05</td>
                  <td>5th</td>
                  <td>Major</td>
                  <td>Red Bull Battle Grounds: Dota 2</td>
                  <td>Champions of Summers Rift</td>
                  <td>0 : 1 </td>
                  <td>$5,000</td>
                </tr>
                <tr>
                  <td>2015-03-01</td>
                  <td>1st</td>
                  <td>Minor</td>
                  <td>Dota 2 Canada Cup - Season 4</td>
                  <td>Champions of Summers Rift</td>
                  <td>3 : 1</td>
                  <td>$4,250</td>
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
