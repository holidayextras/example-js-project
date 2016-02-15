'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Component = require('./component.jsx');

module.exports = function(handler) {
  ReactDOM.render(<Component buttonHandler={handler} />, document.getElementById('react-app'));
}
