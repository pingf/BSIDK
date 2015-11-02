// import ReactDom from 'react-dom'

// ReactDom.render((
// 	<div>
// 	<p>hello world</p>
// 	</div>
// ) , document.getElementById('app'));

import mui from 'material-ui';
// let MenuItem = mui.MenuItem;
// let LeftNav = mui.LeftNav;
let RaisedButton = mui.RaisedButton;

var React = require('react');
var ReactDOM = require('react-dom');


class Hello extends React.Component{ 
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
  	<div>
	  <Hello />
	  <RaisedButton label="hello" primary={true}/>
  	</div>
  ,
  document.getElementById('app')
);