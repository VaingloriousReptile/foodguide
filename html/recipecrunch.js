(function () {
	'use strict';
	var tests,
		compileTest = function (testString) {
			if (testString[0] === '(') {
				//if it's alredy wrapped, don't re-wrap it
				return eval(testString);
			}
			return eval('(' + testString + ')');
		},
		isFunction = function (test) {
			return test instanceof Function;
		},
		receiveTests = function (e) {
			tests = e.data.tests.map(compileTest).filter(isFunction);
			if (tests.length !== e.data.tests.length) {
				self.postMessage({ error: 'Not all functions could be processed.' });
			}
			self.onmessage = receiveData;
		},
		receiveData = function (e) {
			var data = e.data,
				item,
				di,
				dl = data.length;
				i,
				l = tests.length,
				results = [];
			results.length = tests.length;
			for (di = 0; di < dl; di++) {
				item = data[di];
				for (i = 0; i < l; i++) {
					tests[i].test
				}
			}
		};
	self.onmessage = receiveTests;
}());