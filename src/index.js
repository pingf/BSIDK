
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';


ReactDOM.render(
	<div style={{display:'flex',flexDirection:'row'}}>
			<Card pid='haha' title='hello' text='worldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworldworld'/>
			<Card pid='haha2' title='hello' text='worldworld'/>
	</div>,
	document.getElementById('app')
);