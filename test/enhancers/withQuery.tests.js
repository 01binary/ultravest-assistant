import reflect from '../fixtures/reflector.tests.fixture';
import { default as withQuery, initialState } from '../../src/enhancers/withQuery';

describe('enhancer withQuery', () => {

	let reflector;

	beforeAll(() => {
		reflector = reflect(withQuery);
	});

	afterAll(() => {
		reflector = null;
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
});
