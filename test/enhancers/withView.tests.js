import reflect from '../fixtures/reflector.tests.fixture';
import withView, { VIEWS } from '../../src/enhancers/withView';

describe('composer withInvestment', () => {

	let reflector;
	
	beforeAll(() => {
		reflector = reflect(withView);
	});

	afterAll(() => {
		reflector = null;
	});

	test('should set initial state', () => {
		expect(reflector.props.view).toBe(VIEWS.SEGMENTS);
	});

	test('should handle view change', (done) => {
		reflector.props.handleViewChange({
			target: { value: VIEWS.STEPS }
		});

		reflector.update(props => {
			expect(props.view).toBe(VIEWS.STEPS);
			done();
		});
	});
});
