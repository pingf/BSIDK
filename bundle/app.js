webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _button = __webpack_require__(158);

	var _button2 = _interopRequireDefault(_button);

	_react2['default'].render(_react2['default'].createElement(
	  _button2['default'],
	  { onclick: clickHandle },
	  'click'
	), document.getElementById('app'));

	function clickHandle() {
	  console.log('haha');
	}

/***/ }
]);