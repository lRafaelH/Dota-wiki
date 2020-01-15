import React, { Component } from "react";
import { Navbar, Nav, Col, Row } from "react-bootstrap";
import { Table, Card, NavDropdown, Container } from "react-bootstrap";
class sumail extends Component {
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
            <Nav.Link href="/search">Search</Nav.Link>
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
            <h2>Syed Sumail "SumaiL" Hassan</h2>
            <img id="bio-image" src={require("../../images/sumail.jpg")}></img>

            <h3>Team:Evil Geniuses</h3>
            <p>
              Syed Sumail "SumaiL" Hassan is a Professional Dota 2 player born
              in Karachi, Pakistan. He most recently was the midlane player for
              Evil Geniuses. As of September 2019, he is no longer on the active
              roster of Evil Geniuses. Sumail first started playing Dota when he
              was eight years old. When his family moved from Pakistan to
              Rosemont, Illinois in 2012 he began playing in the North American
              Elite League. Sumail quickly became the highest rated player in
              the in-house league, establishing himself as one of the best
              upcoming talents in the North American scene.[1] His play was so
              impressive that UNiVeRsE pushed for EG to recruit him in January
              of 2015. Sumail's LAN debut was at the Dota 2 League Season 5
              finals in Las Vegas on January 6th 2015. The team performed poorly
              at the event, in part to lack luster performance by Sumail.
              Critics began to question whether he deserved a roster spot on a
              team like Evil Geniuses. In February, Sumail would get a chance to
              redeem himself as EG participated in the Dota 2 Asia
              Championships. In his first match of the tournament, Sumail
              introduced his Euls Scepter of Divinity Shadow Fiend build, which
              would quickly become part of the meta for the tournament. EG's
              captain ppd entered the tournament with a focus on drafting around
              Sumail, in order to ensure he was comfortable in game. This proved
              to be quite successful as EG found themselves in the top 4, with
              an 11-4 record, after the group stage. EG stormed through the
              upper bracket beating Na'Vi and Big God, but were soundly defeated
              2-0 by VG in the upper bracket finals. After a 2-0 victory over
              the tournament favorite Team Secret in the lower bracket finals,
              EG had a rematch with VG in the finals. In the finals Sumail
              established himself as one of the best mid players in the world
              with his stellar play. Sumail's most notable performance of the
              tournament was in Game 3 of the finals, where he found himself
              with a 0-3-0 score on Storm Spirit before the three minute mark.
              Undeterred by the poor start, Sumail quickly took control of the
              game and led his team to victory, while finishing with a score of
              17-7-11. Sumail's breakout performance at DAC led to widespread
              recognition as a young prodigy in both the Chinese and Western
              Dota scenes, and secured a reputation as one of the best Storm
              Spirit players in the game. Sumail helped EG establish themselves
              as the best team in the beginning of 2015, along with securing
              $1,284,158 USD for the team. EG entered The International 2015 as
              one of the two favorites along with Team Secret; EG had finished
              2nd behind Secret at each of the previous two LAN tournaments, The
              Summit 3 and ESL One Frankfurt 2015. Team Secret finished in 8th
              place, leaving the way to the championship open for EG. However,
              EG experienced a setback of their own after losing the Upper
              Bracket Finals 0-2 to the surprise wildcard powerhouse CDEC
              Gaming. EG defeated LGD Gaming in the Lower Bracket Finals and
              prevailed 3-1 in a rematch with CDEC in the Grand Finals to claim
              the International 2015 championship. Sumail's play was
              particularly noteworthy in both the Lower Bracket Finals and the
              Grand Finals - Game 1 of the Grand Finals was eerily reminiscent
              of Sumail's experience in DAC, as Sumail died 3 times on his
              signature Storm Spirit in the opening moments of the game, but
              proceeded to complete the fastest Orchid Malevolence on a Storm
              Spirit across the entire tournament. EG took home $6,634,661 for
              their first place finish, making Sumail the youngest player ever
              to surpass $1 million in esports winnings.[2] Following the
              tournament saw the departure of Aui_2000 for Arteezy. He finished
              second place in the MLG 2015 World Finals and came third in
              Valve's inaugural announcement of the Majors system, the Frankfurt
              Major 2015, losing to potential champions, OG in the lower bracket
              finals. Ending the 2015 calendar year, ppd's decision to draft the
              Shadow Fiend for sumaiL in the grand finals of the The Summit 4
              saw the team making an eventual comeback of 3-2, winning the
              tournament. In 2016, SumaiL started off in a slow start and
              finished third in the Shanghai Major. However after numerous
              roster changes throughout the year saw his team exit in the early
              stages of premier tournaments. After the announcement of being
              directly invited to The International 2016, saw a roster change to
              occur with the addition of Zai and Universe, causing the team to
              have to play in the open qualifiers. After qualifying, he attended
              The International 2016 for the second successive time under Evil
              Geniuses and came third place in the tournament. After the
              extended post-TI break, he travelled to China to compete in the
              MDL Autumn 2016 and came first place.[3]
            </p>
            <h2 id="trivi">Trivia</h2>
            <div id="qwe">
              <ul>
                <li>He is the brother of Yawar "YawaR" Hassan</li>
                <li>
                  e enjoys cheese pizza so much that he has it every two days.
                </li>
                <li>
                  SumaiL was featured in Time Magazine's top 30 influential
                  teenagers of 2016, marking the first ever Dota 2 player to be
                  included in the magazine's awards.
                </li>
                <li>
                  He is the youngest player to win an official Valve event,
                  doing so at only 15 years and 361 days old at DAC 2015
                </li>
                <li>
                  He is the youngest player to win an International, winning TI
                  5 while he was just 16 years and 176 days old
                </li>
                <li>
                  He is a big NBA fan, cheering for Golden State Warriors.
                </li>
                <li>He looked up to Maelk in 2010</li>
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
                  <td>2019-08-23</td>
                  <td>2nd </td>
                  <td>Premier</td>
                  <td>The International 2019</td>
                  <td>Evil Geniuses</td>
                  <td>0 : 2</td>
                  <td>$1,201,550</td>
                </tr>
                <tr>
                  <td>2018-08-25</td>
                  <td>3rd</td>
                  <td>Premier</td>
                  <td>The International 2018</td>
                  <td>Evil Geniuses</td>
                  <td>0 : 2</td>
                  <td>$2,680,880</td>
                </tr>
                <tr>
                  <td>2017-05-28</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>The Manila Masters</td>
                  <td>Evil Geniuses</td>
                  <td>3 : 1</td>
                  <td>$125,000</td>
                </tr>
                <tr>
                  <td>2016-10-02</td>
                  <td>1st</td>
                  <td>Premier</td>
                  <td>Mars Dota 2 League 2016 Autumn</td>
                  <td>Evil Geniuses</td>
                  <td>3 :1</td>
                  <td>$112,500</td>
                </tr>
                <tr>
                  <td>2016-08-13 </td>
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
                  <td>3 : 1 </td>
                  <td>$6,634,660</td>
                </tr>
                <tr>
                  <td>2015-07-12 </td>
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
                  <td>3 : 0 </td>
                  <td>$1,284,160</td>
                </tr>
              </tbody>
            </Table>
          </section>
        </div>
      </div>
    );
  }
}

export default sumail;
