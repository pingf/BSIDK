import React from 'react';
import Radium from 'radium';

@Radium
class Button extends React.Component {
	constructor(){
		super();
		this.style = {
			color: '#1d9998',
			backgroundColor: '#002b36',
			border: '1px solid',
			borderWidth: '2px',
			borderRadius: '5px',
			fontSize: '1.5em',
			fontFamily: 'Rajdhani', 
			marginTop: '1px',
			marginBottom: '1px',
			':hover': {
				color: 'red'
			}
		};
	}
	render() {
		return (
			<button onClick={this.props.onClick} style={this.style}>{this.props.children}</button>
		);
	}
}

export default Button;


