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

	describe('with all handlers provided', () => {

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
		});

		afterAll(() => {
			handleQueryChange = null;
			handleQueryParamListenerChange = null;
			handleHistoryCreate = null;
			handleHistoryPush = null;
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

	describe('with any handler not provided', () => {

		beforeAll(() => {
			handleQueryChange = jest.fn();
			handleQueryParamListenerChange = jest.fn();
			handleHistoryCreate = jest.fn();
			handleHistoryPush = null;

			const Sink = withStartup(createSink(jest.fn()));
			const props = {
				handleQueryChange,
				handleQueryParamListenerChange,
				handleHistoryCreate,
				handleHistoryPush
			};

			deep(<Sink {...props} />);
		});

		afterAll(() => {
			handleQueryChange = null;
			handleQueryParamListenerChange = null;
			handleHistoryCreate = null;
			handleHistoryPush = null;
		});

		test('should not call any handlers', () => {
			expect(handleQueryChange).not.toHaveBeenCalled();
			expect(handleQueryParamListenerChange).not.toHaveBeenCalled();
			expect(handleHistoryCreate).not.toHaveBeenCalled();
		});
	});
});
