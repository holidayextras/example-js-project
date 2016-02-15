console.log("index.js loaded");
require('./javascript.js');
require('./javascript_xml.jsx');
require('coffee!./coffeescript.coffee');

var reactApplication = require('./react_app/index.jsx');

var onButtonClick = function() {
  alert("You clicked the button ");
}

reactApplication(onButtonClick);
