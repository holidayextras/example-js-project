// 1. Set up global variables expected by our code
// jsdom = require('jsdom');
// global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.window = document.parentWindow;
// global.window.locale = 'en'
// global.Image = window.Image = function() {};
// global.navigator = {userAgent: ''};
// global.location = window.location = {};
// global.XMLHttpRequest = global.sinon.useFakeXMLHttpRequest();
//
// 2. Set up global variables expected by our tests.
var chai = require('chai');
global.expect = chai.expect
global.sinon = require('sinon');
chai.use(require('dirty-chai'));
chai.use(require('sinon-chai'));
