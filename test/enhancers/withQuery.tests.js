import reflect from '../fixtures/reflector.tests.fixture';
import { default as withQuery, initialState } from '../../src/enhancers/withQuery';

describe('enhancer withQuery', () => {

	let reflector;
	let handleHistoryPush;

	beforeAll(() => {
		handleHistoryPush = jest.fn();
		reflector = reflect(withQuery);
	});

	afterAll(() => {
		reflector = null;
		handleHistoryPush = null;
	});

	test('should set initial state', () => {
		expect(reflect(withQuery).props.query).toEqual(initialState.query);
	});

	test('should handle query change', (done) => {
		reflector.props.handleQueryChange({
			search: '?cat[name]=Mittens'
		});

		reflector.update(props => {
			expect(props.query.cat.name).toBe('Mittens');
			done();
		});
	});

	test('should handle query param listener change', (done) => {
		reflector.props.handleQueryParamListenerChange(handleHistoryPush);
		reflector.update(props => {
			expect(props.onParamChange).toBe(handleHistoryPush);
			done();
		});
	});

	test('should handle query param change', (done) => {
		reflector.props.handleQueryParamChange('hello', 'world');
		reflector.update(props => {
			expect(props.query.hello).toBe('world');
			expect(handleHistoryPush).toBeCalledWith('?cat%5Bname%5D=Mittens&hello=world');
			done();
		});
	});
});
