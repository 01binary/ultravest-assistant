import reflect from '../fixtures/reflector.tests.fixture';
import withQuery from '../../src/enhancers/withQuery';

describe('enhancer withQuery', () => {

	test('should set initial state', () => {
		simulateUrl('http://adopt.cats?cat-name=Mittens&cat-age=7&cat-color=tortoiseshell&location=Diamond%20City');
		const props = reflect(withQuery).props;
		expect(props).toEqual({
			name: 'Mittens',
			age: 7,
			color: 'tortoiseshell'
		});
		expect(props.location).toBe('Diamond City');
	});

	/*test('should handle view change', (done) => {
		reflector.props.handleViewChange({
			target: { value: VIEWS.STEPS }
		});

		reflector.update(props => {
			expect(props.view).toBe(VIEWS.STEPS);
			done();
		});
	});*/

	const simulateUrl = url => global.window = {
		location: {
			url
		}
	};
});
