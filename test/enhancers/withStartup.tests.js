import { h } from 'preact';
import { deep } from 'preact-render-spy';
import { createSink } from 'recompose';
import withStartup from '../../src/enhancers/withStartup';

describe('enhancer withStartup', () => {

	/*describe('with window', () => {

		let handleQueryChange;
		let handleHistoryChange;

		beforeAll(() => {
			handleQueryChange = jest.fn();
			handleHistoryChange = jest.fn();

			const Sink = withStartup(createSink(jest.fn()));
			const props = { handleQueryChange, handleHistoryChange };

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
			expect(handleQueryChange).toHaveBeenCalledWith(global.window.location);
		});

		test('should call handleHistoryChange', () => {
			expect(handleHistoryChange).toHaveBeenCalledWith(handleQueryChange);
		});
	});*/

	describe('with no window', () => {

		let handleQueryChange;
		let handleHistoryChange;

		beforeAll(() => {
			handleQueryChange = jest.fn();
			handleHistoryChange = jest.fn();

			global.window = null;
			console.log('cleared window');

			const Sink = withStartup(createSink(() => null));
			const props = { handleQueryChange, handleHistoryChange };

			deep(<Sink {...props} />);
			global.window = null;
		});

		afterAll(() => {
			handleQueryChange = null;
			handleHistoryChange = null;
		});

		test('should not call handleQueryChange or handleHistoryChange', () => {
			expect(handleQueryChange).not.toHaveBeenCalled();
			expect(handleHistoryChange).not.toHaveBeenCalled();
		});
	});
});
