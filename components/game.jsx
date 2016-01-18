var React = require('react');
var Minesweeper = require('../minesweeper.js');
var Board = require('./board');

var Game = React.createClass({
  getInitialState: function () {
    return ({
      board: new Minesweeper.Board(16, 40)
    });
  },

  updateGame: function () {
    console.log("hello");
  },

  render: function () {
    return (
      <Board board={this.state.board}
             updateGame={this.updateGame}/>
    );
  }
});



module.exports = Game;
