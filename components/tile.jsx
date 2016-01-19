var React = require('react');
var Minesweeper = require('../minesweeper.js');


var Tile = React.createClass({
  render: function () {
    this.klass = "";
    var tileDisplay = Tile.GetTileDisplay(this);
    var klass = "tile " + this.klass;
    return <div className={klass}
                onClick={this.handleClick}>
                {tileDisplay}
           </div>;
    },

  handleClick: function (e) {
    var flagged = e.altKey ? true : false;
    this.props.updateGame(this.props.tile, flagged);
  }
});

Tile.GetTileDisplay = function (tile) {
  if (tile.props.tile.flagged) {
    tile.klass = "flagged";
    return "⚑";
  } else if (tile.props.tile.explored && tile.props.tile.bombed) {
    tile.klass = "bombed";
    return "💣";
  } else if (tile.props.tile.explored) {
    tile.klass = "explored";
    if (tile.props.tile.adjacentBombCount() > 0) {
      return tile.props.tile.adjacentBombCount();
    } else {
      return "_";
    }
  } else if (!tile.props.tile.explored) {
    return "[]";
  }
};


module.exports = Tile;
