// import ReactDom from 'react-dom'

// ReactDom.render((
// 	<div>
// 	<p>hello world</p>
// 	</div>
// ) , document.getElementById('app'));
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import mui from 'material-ui';
let MenuItem = mui.MenuItem;
let LeftNav = mui.LeftNav;

import React from 'react';
import ReactDOM from 'react-dom';


import ReactRouter from 'react-router'
import { Router, Route, IndexRoute, Link } from 'react-router'

import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory();
history.replaceState(null, '/home');


class About extends React.Component {
    render() {
        return ( <div>About</div> );
    }
}

class Home extends React.Component {
    render() {
        return <div>Home</div>;
    }
}


class Hello extends React.Component{
  _onLeftNavChange(e, key, payload) {
    this.context.history.pushState(null,payload.route)
  }
  render() {
  	var menuItems = [
			{ route: 'get-started', text: 'Get Started' },
			{ route: 'customization', text: 'Customization' },
			{ route: '/home', text: 'Home' },
			{ route: '/about', text: 'About' },
			{ route: 'components', text: 'Components' },
			{ type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub' },
			{ type: MenuItem.Types.LINK, payload: 'home', text: 'Home' },
	];
    return (
    	<div>
    	<h1>Hello world</h1>
    	{this.props.children}
    	<LeftNav ref="leftNav" docked={true} openRight={true} menuItems={menuItems} onChange={this._onLeftNavChange.bind(this)}/>
    	</div>
    );
  }
}

Hello.contextTypes = {
    router: React.PropTypes.func.isRequired
};
Hello.contextTypes = {
    location: React.PropTypes.object,
    history: React.PropTypes.object,
};

ReactDOM.render(
    <Router history={history}>
        <Route path='/' component={Hello}>
            <IndexRoute component={Home}/>
            <Route path='home' component={Home}/>
            <Route path='about' component={About}/>
        </Route>
    </Router>
    ,
    document.getElementById('app')
);