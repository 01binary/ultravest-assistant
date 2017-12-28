import { h } from 'preact';
import { deep } from 'preact-render-spy';
import { createSink } from 'recompose';
import withStartup from '../../src/enhancers/withStartup';
import getQueryString from '../../src/selectors/getQueryString';

describe('enhancer withStartup', () => {

	let handleQueryChange;
	let handleQueryParamListenerChange;
	let handleHistoryChange;
	let handleHistoryPush;

	beforeAll(() => {
		handleQueryChange = jest.fn();
		handleQueryParamListenerChange = jest.fn();
		handleHistoryChange = jest.fn();
		handleHistoryPush = jest.fn();

		const Sink = withStartup(createSink(jest.fn()));
		const props = {
			handleQueryChange,
			handleQueryParamListenerChange,
			handleHistoryChange,
			handleHistoryPush
		};

		deep(<Sink {...props} />);

		global.window = {
			location: { query: '?testing' }
		};
	});

	afterAll(() => {
		handleQueryChange = null;
		handleHistoryChange = null;
		global.window = null;
	});

	test('should call handleQueryChange', () => {
		expect(handleQueryChange).toHaveBeenCalledWith(getQueryString());
	});

	test('should call handleQueryParamListenerChange', () => {
		expect(handleQueryParamListenerChange).toHaveBeenCalledWith(handleHistoryPush);
	});

	test('should call handleHistoryChange', () => {
		expect(handleHistoryChange).toHaveBeenCalledWith(handleQueryChange);
	});
});
