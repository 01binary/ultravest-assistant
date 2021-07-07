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

	it('should set initial state', () => {
		expect(reflect(withQuery).props.query).toEqual(initialState.query);
	});

	it('should handle query init', (done) => {
		reflector.props.handleQueryInit({
			location: { search: '?cat-age=5' }
		});

		reflector.update(props => {
			expect(props.query.cat.age).toBe('5');
			done();
		});
	});

	it('should handle query location change', (done) => {
		reflector.props.handleQueryLocationChange({
			search: '?cat-name=Mittens'
		});

		reflector.update(props => {
			expect(props.query.cat.name).toBe('Mittens');
			done();
		});
	});

	it('should handle query change', (done) => {
		const change = {
			cat: {
				condition: 'diabetes'
			}
		};

		reflector.props.handleQueryChange(change);

		reflector.update(props => {
			expect(props.query).toEqual(change);
			done();
		});
	});
});
