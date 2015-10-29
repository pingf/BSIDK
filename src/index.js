// let injectTapEventPlugin = require("react-tap-event-plugin");

// //Needed for onTouchTap
// //Can go away when react 1.0 release
// //Check this repo:
// //https://github.com/zilverline/react-tap-event-plugin
// injectTapEventPlugin();

// import React from 'react';
import ReactDom from 'react-dom';
// import { Router, Route, Link } from 'react-router';
// import RouteHandler from 'react-router';

import mui from 'material-ui';
let MenuItem = mui.MenuItem;
let LeftNav = mui.LeftNav;

// class Home extends React.Component {
//   render() {
//     return (
// 		<div>
// 	        <p>
// 	          There are 2 projects that you can look at to get started. They can be found
// 	          in the <a href="https://github.com/callemall/material-ui/tree/master/examples">examples folder</a>. These
// 	          projects are basic examples that show how to consume material-ui components in your own project.
// 	          The first project uses <a href="http://browserify.org/">browserify</a> for module bundling 
// 	          and <a href="http://gulpjs.com/">gulp</a> for JS task automation, while the second project 
// 	          uses <a href="http://webpack.github.io">webpack</a> for module bundling and building.
// 	        </p>
// 	        <p>
// 	          The source code for this documentation site is also included in the repository. This is a slightly more complex project that 
// 	          also uses webpack, and contains
// 	          examples of every material-ui component. Check out the <a href="https://github.com/callemall/material-ui/tree/master/docs">docs folder</a> for 
// 	          build instructions.
// 	        </p>
// 	    </div>
// 	);
//   }
// }
 

// class App extends React.Component {
// 	constructor(){
// 		super();
// 		console.log(MenuItem);
// 		this.menuItems = [
// 			{ route: 'get-started', text: 'Get Started' },
// 			{ route: 'customization', text: 'Customization' },
// 			{ route: '/home', text: 'Home' },
// 			{ route: 'components', text: 'Components' },
// 			{ type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub' },
// 			{ type: MenuItem.Types.LINK, payload: '/home', text: 'Home' },

// 			// { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
// 			// {
// 			// 	type: MenuItem.Types.LINK,
// 			// 	payload: 'https://github.com/callemall/material-ui',
// 			// 	text: 'GitHub'
// 			// },
// 			// {
// 			// 	text: 'Disabled',
// 			// 	disabled: true
// 			// },
// 			// {
// 			// 	type: MenuItem.Types.LINK,
// 			// 	payload: 'https://www.google.com',
// 			// 	text: 'Disabled Link',
// 			// 	disabled: true
// 			// }
// 		];
// 		// this.refs.leftNav.toggle();
// 		// this._handleClick = this._handleClick.bind(this);
//   //   	this._getSelectedIndex = this._getSelectedIndex.bind(this);
// 	}

// 	render() {
// 		return (
// 			<div>
//           <a href="#"><Link to="home">电影</Link></a>
//           <a href="#"><Link to="books">图书</Link></a>
// 			 <section>
//           		<RouteHandler />
//         	 </section>
// 			</div>
// 			);
// 	}
// }

// ReactDom.render((
//     <Router>
// 	    <Route path="/home" component={Home}/>
// 	    <Route path="/" component={App}/>
//     </Router>
// ), document.getElementById('app'));
// // render(<App />, document.getElementById('app'));


import React, { PropTypes, Component } from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, Link, IndexRoute } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    );
  }
};

class Contact extends Component {
  render() {
    return <div>Contact</div>;
  }
}

class About extends Component {
  render() {
    return ( <div>About</div> );
  }
}

class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Navigation />
        {this.props.children}
      </div>
    );
  }

	constructor(){
		super();
		this.menuItems = [
			{ route: 'get-started', text: 'Get Started' },
			{ route: 'customization', text: 'Customization' },
			{ route: '/home', text: 'Home' },
			{ route: '/about', text: 'About' },
			{ route: 'components', text: 'Components' },
			{ type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub' },
			{ type: MenuItem.Types.LINK, payload: 'home', text: 'Home' },

			// { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
			// {
			// 	type: MenuItem.Types.LINK,
			// 	payload: 'https://github.com/callemall/material-ui',
			// 	text: 'GitHub'
			// },
			// {
			// 	text: 'Disabled',
			// 	disabled: true
			// },
			// {
			// 	type: MenuItem.Types.LINK,
			// 	payload: 'https://www.google.com',
			// 	text: 'Disabled Link',
			// 	disabled: true
			// }
		];
	}

	render() {
		return (
			<div>
			<LeftNav ref="leftNav" docked={true} openRight={true} menuItems={this.menuItems}/>
			 <section>
        		{this.props.children}
        	 </section>
			</div>
			);
	}


}

export default class Root extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='home' component={Home} />
          <Route path='about' component={About} />
        </Route>
      </Router>
    );
  }
}

ReactDom.render(<Root /> , document.getElementById('app'));
// render(<App />, document.getElementById('app'));