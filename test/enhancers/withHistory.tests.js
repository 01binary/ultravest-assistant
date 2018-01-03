import { createBrowserHistory } from 'history';
import reflect from '../fixtures/reflector.tests.fixture';
import { default as withHistory, initialState } from '../../src/enhancers/withHistory';

jest.mock('history');

describe('enhancer withHistory', () => {

	let reflector;
	let listener;
	let listen;
	let push;

	beforeAll(() => {
		listener = jest.fn();
		listen = jest.fn();
		push = jest.fn();

		createBrowserHistory.mockImplementation(() => ({
			listen, push
		}));

		reflector = reflect(withHistory);
	});

	afterAll(() => {
		listener = null;
		listen = null;
		push = null;
		reflector = null;
	});

	it('should set initial state', () => {
		expect(reflect(withHistory).props.browserHistory)
			.toEqual(initialState.browserHistory);
	});

	it('should handle history change', () => {
		reflector.props.handleHistoryCreate(listener);
		expect(listen).toHaveBeenCalledWith(listener);
	});

	it('should handle history push', () => {
		reflector.props.handleHistoryPush('?testing');
		expect(push).toHaveBeenCalledWith('?testing');
	});
});
