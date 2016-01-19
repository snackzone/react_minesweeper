var React = require('react');
var Minesweeper = require('../minesweeper.js');
var Tile = require('./tile');

var Board = React.createClass({
  render: function () {
    var board = this;
    var grid = this.props.board.grid.map(function (row, idx1) {
      return(
        <div className="column" key={idx1}>
        {
        row.map(function (tile, idx2) {
        return(
          <Tile tile={tile}
                updateGame={board.props.updateGame}
                key={idx2} />
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
