'use strict';

var StyleSheet = require('react-style');
var React = require('react');
//
class ButtonHaha extends React.Component {

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
      ButtonHahaStyles.normalStyle,
      props.active ? ButtonHahaStyles.activeStyle : null,
      state.hover ? ButtonHahaStyles.hoverStyle : null,
      state.focus ? ButtonHahaStyles.focusStyle : null
    ].concat(props.styles);

    return (
      <button {...props} className="custom" styles={styles}
        onClick={props.onclick}>
        {props.children}
      </button>
    );
  }
}


var ButtonHahaStyles = StyleSheet.create({

  normalStyle: {
    backgroundColor: '#000000',
    color: '#2aa198',

  },

  activeStyle: {
  },

  hoverStyle: {
  },

  focusStyle: {
  }

});

module.exports = ButtonHaha;
