import React, { Component } from 'react';
import '../css/Scoreboard.css';
import Header from './Header.js'
import Player from './Player.js'
import Counter from './Counter.js'

var PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andrew Chalkley",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Holligan",
    score: 42,
    id: 3,
  },
];

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = { players: PLAYERS };
  }
  changeScore = (index, n) => {
    this.state.players[index].score +=n;
    this.setState(this.state);
  }
  render() {
    return (
      <div className="application">
        <Header title="My Score Board"/>
        <div className="players">
          {this.state.players.map(function (player, index){
              return (
                <Player 
                  name={player.name} 
                  score={player.score} 
                  key={player.id} 
                  changeScore={function(n) {this.changeScore(index,n)}.bind(this)} />
              );
          }.bind(this))}
        </div>
      </div>
    );
  }
}

export default Scoreboard;
