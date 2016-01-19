var React = require('react');
var Minesweeper = require('../minesweeper.js');
var Board = require('./board');

var Game = React.createClass({
  getInitialState: function () {
    return ({
      board: new Minesweeper.Board(16, 40)
    });
  },

  updateGame: function (tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({board: this.state.board});
  },

  render: function () {
    return (
      <Board board={this.state.board}
             updateGame={this.updateGame}/>
    );
  }
});



module.exports = Game;
