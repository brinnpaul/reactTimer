let React = require('react');
let Nav = require('Nav');

let Main = (props) => {
  return (
    <div>
      <Nav/>
        <div>
          <div>
            <p>Main.jsx Rendered</p>
            {props.children}
          </div>
        </div>
    </div>
  );
}

module.exports = Main;
