import React from 'react';

class Button extends React.Component {
	constructor(){
		super();
		this.style = {
		  color: 'green',
		  backgroundColor: 'black'
		};
	}
	render() {
		return (
			<button onClick={this.props.onClick} style={this.style}>{this.props.children}</button>
		);
	}
}

export default Button;


