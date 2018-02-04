import reflect from '../fixtures/reflector.tests.fixture';
import withInvestmentOrQuery from '../../src/enhancers/withInvestmentOrQuery';
import flaskPresets from '../../src/config/flaskPresets.json';
import investmentPresets from '../../src/config/investmentPresets.json';

describe('enhancer withInvestmentOrQuery', () => {

	describe('with no overrides', () => {

		let reflector, props;

		beforeAll(() => {
			props = {
				query: {},
				flask,
				investment,
				handleInvestmentPresetChange: jest.fn(),
				handleQueryParamChange: jest.fn()
			};

			reflector = reflect(withInvestmentOrQuery, props);
		});

		afterAll(() => {
			props = null;
			reflector = null;
		});

		it('should map props', () => {
			expect(reflector.props.flask.diameter).toBe(props.flask.diameter);
			expect(reflector.props.flask.height).toBe(props.flask.height);
			expect(reflector.props.flask.presets).toBe(props.flask.presets);
			expect(reflector.props.flask.preset).toBe(props.flask.preset);
			expect(reflector.props.preset).toBe(props.investment.preset);
			expect(reflector.props.presets).toBe(props.investment.presets);
		});

		it('should map handleQueryPresetChange handler', () => {
			reflector.props.handleQueryPresetChange(change);
			expect(props.handleInvestmentPresetChange).toHaveBeenCalledWith(change);
			expect(props.handleQueryParamChange).toHaveBeenCalledWith('investment.preset', 'testing');
		});
	});

	describe('with overrides', () => {

		let reflector, props;

		beforeAll(() => {
			props = {
				query: {
					flask: {
						diameter: 100,
						height: 100,
						preset: 'veryCustom',
						presets: {
							veryCustom: {
								diameter: 100,
								height: 200
							},
							alsoCustom: {
								diameter: 33,
								height: 66
							}
						}
					},
					investment: {
						preset: 'user',
						presets: {
							user: {
								investment: 11.0,
								water: 22.0
							}
						}
					}
				},
				flask,
				investment,
				handleInvestmentPresetChange: jest.fn(),
				handleQueryParamChange: jest.fn()
			};

			reflector = reflect(withInvestmentOrQuery, props);
		});

		afterAll(() => {
			props = null;
			reflector = null;
		});

		it('should map props', () => {
			expect(reflector.props.flask.diameter).toBe(props.query.flask.diameter);
			expect(reflector.props.flask.height).toBe(props.query.flask.height);
			expect(reflector.props.flask.presets).toBe(props.query.flask.presets);
			expect(reflector.props.flask.preset).toBe(props.query.flask.preset);
			expect(reflector.props.preset).toBe(props.query.investment.preset);
			expect(reflector.props.presets).toBe(props.query.investment.presets);
		});
	});

	const flaskPresetName = Object.keys(flaskPresets)[0];
	const flaskPreset = flaskPresets[flaskPresetName];
	const flask = {
		flask: flaskPreset,
		preset: flaskPreset,
		presets: flaskPresets
	};
	const investmentPresetName = Object.keys(investmentPresets)[0];
	const investment = {
		presets: investmentPresets,
		preset: investmentPresetName
	};
	const change = { target: { value: 'testing' } };
});
