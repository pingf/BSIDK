
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
			<div style={{display:'flex',flexDirection:'column',width:'20%'}}>
				<div style={{display:'flex',flexDirection:'row'}}>
					<p style={{backgroundColor:'blue',display:'inline',margin:'0',padding:'2px',width:'80%'}}>{this.props.title}</p>
					<button ref='btn' style={{backgroundColor:'white',display:'inline',width:'15%'}}>+</button>
				</div>
				<div id={this.props.pid} style={{border:'1px solid',height:'100px',overflow:'scroll'}}>
					<p style={{wordWrap:'break-word'}}>{this.props.text}</p>
				</div>
			</div>
		);
	}
}

export default Card; 
