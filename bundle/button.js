webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(158);


/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StyleSheet = __webpack_require__(159);
	var React = __webpack_require__(2);

	var Button = (function (_React$Component) {
	  _inherits(Button, _React$Component);

	  function Button(props) {
	    _classCallCheck(this, Button);

	    _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      focus: false,
	      hover: false
	    };
	  }

	  _createClass(Button, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      var props = this.props;
	      var state = this.state;
	      var styles = [ButtonStyles.normalStyle, props.active ? ButtonStyles.activeStyle : null, state.hover ? ButtonStyles.hoverStyle : null, state.focus ? ButtonStyles.focusStyle : null].concat(props.styles);

	      return React.createElement(
	        'button',
	        _extends({}, props, { className: 'custom', styles: styles,
	          onMouseEnter: function () {
	            return _this.setState({ hover: true });
	          },
	          onMouseLeave: function () {
	            return _this.setState({ hover: false });
	          },
	          onFocus: function () {
	            return _this.setState({ focus: true });
	          },
	          onBlur: function () {
	            return _this.setState({ focus: false });
	          },
	          onClick: props.onclick }),
	        props.children
	      );
	    }
	  }]);

	  return Button;
	})(React.Component);

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
	    border: 'solid 2.5px #1c88c3'
	  },

	  focusStyle: {
	    backgroundImage: 'linear-gradient(transparent, rgba(0,0,0, 0.05) 40%, rgba(0,0,0, 0.10))',
	    outline: 'none'
	  }

	});

	module.exports = Button;

/***/ }

});