import React, { Component } from "react";
import { Nav, Navbar, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../design/march.css";
class march extends Component {
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
        <div id="cont">
          <section id="main-bio">
            <h2>Park Tae-won</h2>
            <img
              id="bio-image"
              src={require("../../images/MarchSea.jpg")}
            ></img>

            <h3>Team:TNC Predator</h3>
            <p>
              Park "March" Tae-won is a Korean/Canadian professional Dota 2
              player who is currently inactive in J.Storm and the captain of TNC
              Predator.In Defense of the Ancients, March was a notable member of
              the North American DotA scene. He played for teams such as AzN and
              all-star team Nirvana.int over a period from 2009-2010. Following
              the completion of his military service, March returned to the
              professional Dota 2 scene as a coach for Echo International and
              later Wind and Rain. [1][2] Wind and Rain were able to advance to
              the Grand Finals of The International 2018 Europe Qualifier, where
              they were defeated 3-1 by eventual TI8 champions OG. After
              attending TI8 as an analyst, March registered as a member of
              marchoutofarmy In the ensuing post TI roster shuffle. The team was
              comprised of former W&R members Bryle, FoREv and MiLAN as well as
              Moo, who had recently left compLexity Gaming. The team managed to
              qualify for the 3rd and final North American spot at The Kuala
              Lampur Major, which led to their acquisition by J.Storm. After few
              series of disappointing results, he was removed from the roster,
              which he founded. After failing to qualify for The International
              2019 with Team Jinesbrus, he went to a coach Fnatic.
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
                  <td>2019-11-24</td>
                  <td>1st </td>
                  <td>Premier</td>
                  <td>MDL Chengdu Major</td>
                  <td>TNC Predator</td>
                  <td>3 : 1</td>
                  <td>$300,000</td>
                </tr>
                <tr>
                  <td>2019-10-27</td>
                  <td>1st</td>
                  <td>Major</td>
                  <td>ESL One Hamburg 2019</td>
                  <td>TNC Predator</td>
                  <td>3 : 2</td>
                  <td>$125,000</td>
                </tr>
                <tr>
                  <td>2019-04-14</td>
                  <td>1st</td>
                  <td>Major</td>
                  <td>WSOE 6: Dota 2 - Serenity's Destiny</td>
                  <td>J.Storm</td>
                  <td>3 : 2</td>
                  <td>$50,000</td>
                </tr>
                <tr>
                  <td>2019-03-20</td>
                  <td>7 - 8th</td>
                  <td>Premier</td>
                  <td>DreamLeague Season 11</td>
                  <td>J.Storm</td>
                  <td>0 : 2 </td>
                  <td>$40,000</td>
                </tr>
                <tr>
                  <td>2018-10-15</td>
                  <td>2nd</td>
                  <td>Major</td>
                  <td>World Showdown of Esports #1</td>
                  <td>J.Storm</td>
                  <td>0 : 2</td>
                  <td>$20,000</td>
                </tr>
                <tr>
                  <td>2015-10-11</td>
                  <td>1st</td>
                  <td>Major</td>
                  <td>World Cyber Arena 2015 - SEA Pro Qualifiers </td>
                  <td>MVP Phoenix</td>
                  <td>2 : 1 </td>
                  <td>$47,256</td>
                </tr>
                <tr>
                  <td>2015-08-06</td>
                  <td>7 - 8th</td>
                  <td>Premier</td>
                  <td>The International 2015</td>
                  <td>MVP Phoenix</td>
                  <td>0 : 2</td>
                  <td>$829,333</td>
                </tr>
                <tr>
                  <td>2014-06-29 </td>
                  <td>1st</td>
                  <td>Major</td>
                  <td>Korea Dota League Season 2</td>
                  <td>MVP Phoenix</td>
                  <td>3 : 1 </td>
                  <td>$9,863</td>
                </tr>
                <tr>
                  <td>2013-12-28</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>Nexon Sponsorship League Season 2</td>
                  <td>MVP Phoenix</td>
                  <td>3 : 2</td>
                  <td>$370,319</td>
                </tr>
                <tr>
                  <td>2013-07-14</td>
                  <td>1st</td>
                  <td>Major</td>
                  <td>Nexon Starter League</td>
                  <td>FXOpen e-Sports</td>
                  <td>3 : 0 </td>
                  <td>$8,883</td>
                </tr>
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    );
  }
}

export default march;
