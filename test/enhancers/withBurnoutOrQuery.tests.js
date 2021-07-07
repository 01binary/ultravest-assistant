import reflect from '../fixtures/reflector.tests.fixture';
import withBurnoutOrQuery from '../../src/enhancers/withBurnoutOrQuery';
import getBurnoutSchedule from '../../src/selectors/getBurnoutSchedule';
import flaskPresets from '../../src/config/flaskPresets.json';
import burnoutPresets from '../../src/config/burnoutPresets.json';

describe('enhancer withBurnoutOrQuery', () => {

	describe('with no overrides', () => {

		let reflector, props;

		beforeAll(() => {
			props = {
				query: {},
				flask,
				view: 'testing',
				handleViewChange: jest.fn()
			};

			reflector = reflect(withBurnoutOrQuery, props);
		});

		afterAll(() => {
			props.handleViewChange = null;
			props = null;
			reflector = null;
		});

		it('should map props', () => {
			expect(reflector.props.view).toBe(props.view);
			expect(reflector.props.handleViewChange).toBe(props.handleViewChange);
			expect(reflector.props.schedule).toBe(
				getBurnoutSchedule(burnoutPresets, props.flask)
			);
		});
	});

	describe('with overrides', () => {

		let reflector, props;

		beforeAll(() => {
			props = {
				query: {
					flask: {
						diameter: 100,
						height: 200
					},
					view: 'another'
				},
				flask,
				view: 'test',
				handleViewChange: jest.fn()
			};

			reflector = reflect(withBurnoutOrQuery, props);
		});

		afterAll(() => {
			props.handleViewChange = null;
			props = null;
			reflector = null;
		});

		it('should map props', () => {
			expect(reflector.props.view).toBe(props.query.view);
			expect(reflector.props.handleViewChange).toBe(props.handleViewChange);
			expect(reflector.props.schedule).toBe(
				getBurnoutSchedule(burnoutPresets, props.query.flask)
			);
		});
	});

	const flask = flaskPresets[Object.keys(flaskPresets)[0]];
});
