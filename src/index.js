
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Card from './components/redux_card/card';
import card from './components/redux_card/reducers';


let store1 = createStore(card);
let store2 = createStore(card);

ReactDOM.render(
	<div style={{display:'flex',flexDirection:'row'}}>
			<Provider store={store1}>
				<Card pid='haha' title='hello' text='worldworldworldworldworldworld'/>
			</Provider>
			<Provider store={store2}>
				<Card pid='haha2' title='hello' text='worldworld'/>
			</Provider>
	</div>,
	document.getElementById('app')
);