let React = require('react');
let {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Time App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/Countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <div className="menu-text">
            Created by <a href="http://www.github.com/brinnpaul/" target="blank">Brinn Riordan</a>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Nav;