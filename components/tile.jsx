var React = require('react');
var Minesweeper = require('../minesweeper.js');


var Tile = React.createClass({
  render: function () {
    this.klass = "";
    var tileDisplay = Tile.GetTileDisplay(this);
    var klass = "tile " + this.klass;
    return <div className={klass}>
                {tileDisplay}
           </div>;
    }
});

Tile.GetTileDisplay = function (tile) {
  if (tile.props.object.flagged) {
    tile.klass = "flagged";
    return "⚑";
  } else if (tile.props.object.revealed && tile.props.object.bombed) {
    tile.klass = "bombed";
    return "💣";
  } else if (tile.props.object.revealed) {
    tile.klass = "revealed";
    if (tile.props.object.adjacentBombCount() > 0) {
      return tile.props.object.adjacentBombCount();
    } else {
      return "_";
    }
  } else if (!tile.props.object.revealed) {
    return "[]";
  }
}


module.exports = Tile;
