import { h } from 'preact';
import { deep } from 'preact-render-spy';
import { createSink } from 'recompose';
import withStartup from '../../src/enhancers/withStartup';
import getLocation from '../../src/selectors/getLocation';

describe('enhancer withStartup', () => {

	let handleQueryChange;
	let handleQueryParamListenerChange;
	let handleHistoryCreate;
	let handleHistoryPush;

	beforeAll(() => {
		handleQueryChange = jest.fn();
		handleQueryParamListenerChange = jest.fn();
		handleHistoryCreate = jest.fn();
		handleHistoryPush = jest.fn();

		const Sink = withStartup(createSink(jest.fn()));
		const props = {
			handleQueryChange,
			handleQueryParamListenerChange,
			handleHistoryCreate,
			handleHistoryPush
		};

		deep(<Sink {...props} />);

		global.window = {
			location: { query: '?testing' }
		};
	});

	afterAll(() => {
		handleQueryChange = null;
		handleHistoryCreate = null;
		global.window = null;
	});

	test('should call handleQueryChange', () => {
		expect(handleQueryChange).toHaveBeenCalledWith(getLocation());
	});

	test('should call handleQueryParamListenerChange', () => {
		expect(handleQueryParamListenerChange).toHaveBeenCalledWith(handleHistoryPush);
	});

	test('should call handleHistoryCreate', () => {
		expect(handleHistoryCreate).toHaveBeenCalledWith(handleQueryChange);
	});
});
