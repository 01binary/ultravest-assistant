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

	it('should set initial state', () => {
		expect(reflect(withQuery).props.query).toEqual(initialState.query);
	});

	it('should handle query change', (done) => {
		reflector.props.handleQueryChange({
			search: '?cat[name]=Mittens'
		});

		reflector.update(props => {
			expect(props.query.cat.name).toBe('Mittens');
			done();
		});
	});

	it('should handle query param change with no listener', (done) => {
		reflector.props.handleQueryParamChange('testing', 'test');
		reflector.update(props => {
			expect(props.query.testing).toBe('test');
			expect(handleHistoryPush).not.toBeCalled();
			done();
		});
	});

	it('should handle query param listener change', (done) => {
		reflector.props.handleQueryParamListenerChange(handleHistoryPush);
		reflector.update(props => {
			expect(props.onParamChange).toBe(handleHistoryPush);
			done();
		});
	});

	it('should handle query param change', (done) => {
		reflector.props.handleQueryParamChange('hello', 'world');
		reflector.update(props => {
			expect(props.query.hello).toBe('world');
			expect(handleHistoryPush).toBeCalledWith('?cat-name=Mittens&testing=test&hello=world');
			done();
		});
	});
});
