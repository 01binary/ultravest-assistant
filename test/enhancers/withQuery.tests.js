import reflect from '../fixtures/reflector.tests.fixture';
import { default as withQuery, initialState } from '../../src/enhancers/withQuery';

describe('enhancer withQuery', () => {

	let reflector;
	let push;

	beforeAll(() => {
		push = jest.fn();
		reflector = reflect(withQuery);
	});

	afterAll(() => {
		reflector = null;
		push = null;
	});

	it('should set initial state', () => {
		expect(reflect(withQuery).props.query).toEqual(initialState.query);
	});

	it('should handle query init', (done) => {
		reflector.props.handleQueryInit({
			location: { search: '?cat-age=5' },
			push
		});

		reflector.update(props => {
			expect(props.query.cat.age).toBe('5');
			done();
		});
	});

	it('should handle query change', (done) => {
		reflector.props.handleQueryChange({
			search: '?cat-name=Mittens'
		});

		reflector.update(props => {
			expect(props.query.cat.name).toBe('Mittens');
			done();
		});
	});

	it('should handle query param change', (done) => {
		reflector.props.handleQueryParamChange('hello', 'world');
		reflector.update(props => {
			expect(props.query.cat.name).toBe('Mittens');
			expect(props.query.hello).toBe('world');
			expect(push).toBeCalledWith('?cat-name=Mittens&hello=world');
			done();
		});
	});
});
