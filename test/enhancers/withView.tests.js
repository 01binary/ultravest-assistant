import {
	default as withView,
	VIEW_SEGMENTS,
	VIEW_STEPS
} from '../../src/enhancers/withView';
import reflect from '../fixtures/reflector.tests.fixture';

describe('composer withView', () => {

	let reflector;

	beforeAll(() => {
		reflector = reflect(withView);
	});

	afterAll(() => {
		reflector = null;
	});

	test('should set initial state', () => {
		expect(reflector.props.showSegments).toEqual(false);
	});

	test('should switch to segment view', done => {
		reflector.props.handleChangeView({
			target: {
				value: VIEW_SEGMENTS
			}
		});

		reflector.update(() => {
			expect(reflector.props.showSegments).toEqual(true);
			done();
		});
	});

	test('should switch to step view', done => {
		reflector.props.handleChangeView({
			target: {
				value: VIEW_STEPS
			}
		});

		reflector.update(() => {
			expect(reflector.props.showSegments).toEqual(false);
			done();
		});
	});
});
