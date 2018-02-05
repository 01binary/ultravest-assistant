import { h } from 'preact';
import { deep } from 'preact-render-spy';
import { createSink } from 'recompose';
import { createBrowserHistory, listen } from 'history';
import withStartup from '../../src/enhancers/withStartup';

describe('enhancer withStartup', () => {

	let handleQueryInit;
	let handleQueryLocationChange;

	describe('with all handlers provided', () => {

		beforeAll(() => {
			handleQueryInit = jest.fn();
			handleQueryLocationChange = jest.fn();

			const Sink = withStartup(createSink(jest.fn()));
			const props = { handleQueryInit, handleQueryLocationChange };

			deep(<Sink {...props} />);
		});

		afterAll(() => {
			handleQueryInit = null;
			handleQueryLocationChange = null;
		});

		it('should call handleQueryInit', () => {
			expect(handleQueryInit).toHaveBeenCalledWith(createBrowserHistory());
		});

		it('should pass handleQueryLocationChange to history listen', () => {
			expect(listen).toHaveBeenCalledWith(handleQueryLocationChange);
		});
	});

	describe('with any handler not provided', () => {

		beforeAll(() => {
			handleQueryInit = jest.fn();
			handleQueryLocationChange = null;

			listen.mockReset();
			
			const Sink = withStartup(createSink(jest.fn()));
			const props = { handleQueryInit, handleQueryLocationChange };


			deep(<Sink {...props} />);
		});

		afterAll(() => {
			handleQueryInit = null;
		});

		it('should not call any handlers', () => {
			expect(handleQueryInit).not.toHaveBeenCalled();
		});

		it('should not call history listen', () => {
			expect(listen).not.toHaveBeenCalled();
		});
	});
});
