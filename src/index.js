import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import mui from 'material-ui';
let LeftNav = mui.LeftNav;

import React from 'react';
import ReactDOM from 'react-dom';


import ReactRouter from 'react-router'
import { Router, Route, IndexRoute, Link } from 'react-router'


import LeftNavTrigger from './components/left_nav_trigger'

import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory();
history.replaceState(null, '/');

let MenuItem = mui.MenuItem;

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


class Hello extends React.Component {
    _onLeftNavChange(e, key, payload) {
        this.context.history.pushState(null, payload.route)
    }

    render() {
        var style_left = {
            float: 'left',
            width:'20%',
            background:'#c9c'
        };
        var style_main = {
            float: 'left',
            width:'50%',
            background:'#c9c'
        };
        var style_footer = {
            clear: 'both',
            background:'yellow'
        };
        return (
            <div id="content">
                <nav style={style_left}>
                    <LeftNavTrigger></LeftNavTrigger>
                </nav>
                <section id="main" style={style_main}>
                    <h1>Hello world</h1>
                    {this.props.children}
                </section>
                <nav style={style_footer}>
                    <p>haha</p>
                </nav>
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
            <Route path='about' component={About}/>
            <Route path='home' component={Home}/>
        </Route>
    </Router>
    ,
    document.getElementById('app')
);