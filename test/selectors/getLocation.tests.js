describe('selector getLocation', () => {

	beforeEach(jest.resetModules);

	test('should return window location in browser', () => {
		Object.defineProperty(global.window.location, 'search', {
			writable: true,
			value: '?test'
		});
		const getLocation = require('../../src/selectors/getLocation').default;
		expect(getLocation().search).toEqual('?test');
	});

	test('should return empty search otherwise', () => {
		delete global.window;
		const getLocation = require('../../src/selectors/getLocation').default;
		expect(getLocation().search).toEqual('');
	});
});
