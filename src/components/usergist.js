
import React from 'react';
import ReactDOM from 'react-dom';

class UserGist extends React.Component {
	constructor(){
		super();
		this.state={
			username: '',
			lastGistUrl: ''
		}	
	}

	componentDidMount() {
		console.log($(ReactDOM.findDOMNode(this)).text());
		$.get(this.props.source, function(result) {
			var lastGist = result[0];
			console.log(lastGist);
			this.setState({
				username: lastGist.owner.login,
				lastGistUrl: lastGist.html_url
			});
			console.log($(ReactDOM.findDOMNode(this)).text());
		}.bind(this));
	}

	render() {
		return (
			<div>
		        {this.state.username}'s last gist is 
		        <a href={this.state.lastGistUrl}> here</a>.
		    </div>		
		);
	}
}

export default UserGist; 
