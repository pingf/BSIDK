'use strict';

var StyleSheet = require('react-style');
var React = require('react');

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      hover: false
    };
  }

  render() {
    var props = this.props;
    var state = this.state;
    var styles = [
      ButtonStyles.normalStyle,
      props.active ? ButtonStyles.activeStyle : null,
      state.hover ? ButtonStyles.hoverStyle : null,
      state.focus ? ButtonStyles.focusStyle : null
    ].concat(props.styles);

    return (
      <button {...props} className="custom" styles={styles}
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
        onFocus={() => this.setState({focus: true})}
        onBlur={() => this.setState({focus: false})}
        onClick={props.onclick}>
        {props.children}
      </button>
    );
  }
}


var ButtonStyles = StyleSheet.create({

  normalStyle: {
    backgroundColor: '#002b36',
    color: '#2aa198',
    border: 'solid 2.5px #001f27',
    borderRadius: '8%',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: 'Microsoft YaHei Mono',
    fontSize: '100%',
    lineHeight: 'normal',
    padding: '0.4em 0.8em',
    userSelect: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'baseline',
    whiteSpace: 'nowrap',
    zoom: 1
  },

  activeStyle: {
    boxShadow: '0 0 0 1px rgba(0,0,0, 0.15) inset, 0 0 6px rgba(0,0,0, 0.20) inset'
  },

  hoverStyle: {
    color: '#1c88c3',
    border: 'solid 2.5px #1c88c3',
  },

  focusStyle: {
    backgroundImage: 'linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10))',
    outline: 'none'
  }

});

module.exports = Button;
