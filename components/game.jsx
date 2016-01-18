var React = require('react');
var Minesweeper = require('../minesweeper.js');

var Game = React.createClass({
  getInitialState: function () {
    return ({
      board: new Minesweeper.Board ()
    });
  },

  updateGame: function () {
  },

  render: function () {
    return (
      <Board board={this.state.board}
             updateGame={this.updateGame}/>
    );
  }
});
