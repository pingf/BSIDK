import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import Button from './button'

// React component
class Counter extends React.Component {
	render(){
		const { value, onIncreaseClick, click } = this.props;
		return (
			<div>
			<div>
			<span>{value}</span>
			<Button onClick={onIncreaseClick}>点我加一</Button>
			</div>
			<div>
			<Button onClick={this.test}>点我输出</Button>
			</div>
			</div>
			);
	}
	test(){
		console.log('hahahaha');
	}
}

// Action:
const increaseAction = {type: 'increase'};

// Reducer:
function counter(state={count: 0}, action) {
	let count = state.count;
	switch(action.type){
		case 'increase':
		return {count: count+1};
		default:
		return state;
	}
}

// Store:
let store = createStore(counter);

// Map Redux state to component props
function mapStateToProps(state)  {
	return {
		value: state.count
	};
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		onIncreaseClick: () => dispatch(increaseAction),
	};
}

// Connected Component:
let App = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Counter);

	ReactDOM.render(
		<Provider store={store}>
		<App />
		</Provider>,
		document.getElementById('app')
		);
