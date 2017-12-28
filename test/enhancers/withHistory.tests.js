import reflect from '../fixtures/reflector.tests.fixture';
import { default as withHistory, initialState } from '../../src/enhancers/withHistory';

describe('enhancer withHistory', () => {

	let reflector;
	let listener;
	let listen;
	let push;

	beforeAll(() => {
		listener = jest.fn();
		listen = jest.fn();
		push = jest.fn();
		jest.mock('history', {
			createBrowserHistory: () => ({ listen, push })
		});
		reflector = reflect(withHistory);
	});

	afterAll(() => {
		reflector = null;
		listener = null;
		listen = null;
		push = null;
	});

	test('should set initial state', () => {
		expect(reflect(withHistory).props.browserHistory)
			.toEqual(initialState.browserHistory);
	});

	test('should handle history change', (done) => {
		reflector.props.handleHistoryChange(listener);
		reflector.update(props => {
			expect(listen).toHaveBeenCalledWith(listener);
			done();
		});
	});
});
