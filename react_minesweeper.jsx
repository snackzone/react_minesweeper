var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/game');

var Minesweeper = React.createClass({
  render: function () {
    return(
      <div>
        <Game />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Minesweeper />, document.getElementById('root'));
});
