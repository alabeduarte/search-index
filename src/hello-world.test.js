const helloWorld = require('./hello-world');

describe('Hello World', () => {
	it('works', () => {
		expect(helloWorld()).toEqual('Hello World');
	});
});
