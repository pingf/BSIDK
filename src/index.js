
import React from 'react';
import ReactDOM from 'react-dom';
import UserGist from './components/usergist';


ReactDOM.render(
	<UserGist source="https://api.github.com/users/octocat/gists"/>,
	document.getElementById('app')
);