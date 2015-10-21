
import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

@Radium
class Card extends React.Component {
	componentDidMount() {
		const { pid } = this.props;
		$(ReactDOM.findDOMNode(this.refs.btn_up)).click(function(){
			$('#'+pid).slideUp();
		});
		$(ReactDOM.findDOMNode(this.refs.btn_down)).click(function(){
			$('#'+pid).slideDown();
		});
	}

	render() {
		return (
			<div>
				<p id={this.props.pid}>This is a paragraph.</p>
				<button ref="btn_up">Slide up</button>
				<button ref="btn_down">Slide down</button>
			</div>
		);
	}
}

export default Card; 
