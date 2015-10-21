
import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

// @Radium
class Card extends React.Component {
	componentDidMount() {
		const { pid } = this.props;
		$(ReactDOM.findDOMNode(this.refs.btn)).click(function(){
			$('#'+pid).slideToggle();
		});
	}

	render() {
		return (
			<div style={{border:'2px solid'}}>
				<div>
					<p style={{backgroundColor:'blue',display:'inline',padding:'1px'}}>{this.props.title}</p>
					<button ref='btn' style={{backgroundColor:'white',display:'inline'}}>+</button>
				</div>
				<div style={{border:'1px solid'}}>
					<p id={this.props.pid}>{this.props.text}</p>
				</div>
			</div>
		);
	}
}

export default Card; 
