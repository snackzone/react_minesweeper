var React = require('react');
var Minesweeper = require('../minesweeper.js');
var Tile = require('./tile');

var Board = React.createClass({
  render: function () {
    var board = this;
    var grid = this.props.board.grid.map(function (row, index) {
      return(
        <div className="column" key={index}>
        {
        row.map(function (tile, index) {
        return(
          <Tile object={tile}
                updateGame={board.props.updateGame}
                key={index} />
              );
            })
          }
        </div>
      );
    });

    return (
      <div>{grid}</div>
    );
  }
});









module.exports = Board;
