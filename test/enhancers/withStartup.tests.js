import { h } from 'preact';
import { deep } from 'preact-render-spy';
import { createSink } from 'recompose';
import withStartup from '../../src/enhancers/withStartup';

describe('enhancer withStartup', () => {

	describe('with window', () => {

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
	});
});
