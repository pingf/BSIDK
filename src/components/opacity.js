import React from 'react';
import Radium from 'radium';

@Radium
class Opacity extends React.Component {
	constructor() {
		super();
		this.state = {
			opacity: 1.0,
			color: 'black'
		};
	}

	componentDidMount() {
		this.timer = setInterval(function () {
			var opacity = this.state.opacity;
			opacity -= .05;
			if (opacity < 0.1) {
				opacity = 1.0;
			}
			this.setState({
				opacity: opacity,
			});
		}.bind(this), 100);
	}

	mouseOver(){
			this.setState({
				color: "red"
			});
	}

	render() {
		return (
			<div style={{opacity: this.state.opacity, color:this.state.color}} onMouseOver={this.mouseOver.bind(this)}>
			Hello {this.props.name}
			</div>
		);
	}
}

export default Opacity; 

