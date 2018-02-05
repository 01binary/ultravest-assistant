import reflect from '../fixtures/reflector.tests.fixture';
import withFlaskOrQuery from '../../src/enhancers/withFlaskOrQuery';
import presets from '../../src/config/flaskPresets.json';

describe('enhancer withFlaskOrQuery', () => {

	describe('with no overrides', () => {

		let reflector, props, handleQueryParamChangeWithParam;

		beforeAll(() => {
			handleQueryParamChangeWithParam = jest.fn();

			props = {
				query: {},
				flask: flaskProps,
				handleFlaskPresetChange: jest.fn(),
				handleFlaskDiameterChange: jest.fn(),
				handleFlaskHeightChange: jest.fn(),
				handleAddFlaskPreset: jest.fn(),
				handleRemoveFlaskPreset: jest.fn(),
				handleQueryParamChange: jest.fn(() => handleQueryParamChangeWithParam)
			};

			reflector = reflect(withFlaskOrQuery, props);
		});

		afterAll(() => {
			props = null;
			reflector = null;
		});

		it('should override flask props from query', () => {
			expect(reflector.props.diameter).toBe(props.flask.diameter);
			expect(reflector.props.height).toBe(props.flask.height);
			expect(reflector.props.presets).toBe(props.flask.presets);
			expect(reflector.props.preset).toBe(props.flask.preset);
		});

		it('should map handleQueryPresetChange handler', () => {
			reflector.props.handleQueryPresetChange(presetChange);
			expect(props.handleQueryParamChange).toHaveBeenCalledWith('flask.preset'),
			expect(handleQueryParamChangeWithParam).toHaveBeenCalledWith(presetChange);
		});

		it('should map handleQueryDiameterChange handler', () => {
			reflector.props.handleQueryDiameterChange(diameterChange);
			expect(props.handleQueryParamChange).toHaveBeenCalledWith('flask.diameter');
			expect(handleQueryParamChangeWithParam).toHaveBeenCalledWith(diameterChange);
		});

		it('should map handleQueryHeightChange handler', () => {
			reflector.props.handleQueryHeightChange(heightChange);
			expect(props.handleQueryParamChange).toHaveBeenCalledWith('flask.height');
			expect(handleQueryParamChangeWithParam).toHaveBeenCalledWith(heightChange);
		});

		it('should map handlers', () => {
			expect(reflector.props.handleAddFlaskPreset)
				.toBe(props.handleAddFlaskPreset);
			expect(reflector.props.handleRemoveFlaskPreset)
				.toBe(props.handleRemoveFlaskPreset);
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
						preset: 'whatever',
						presets: {
							whatever: {
								diameter: 22,
								height: 33
							}
						}
					}
				},
				flask: flaskProps,
				handleQueryParamChange: () => jest.fn()
			};

			reflector = reflect(withFlaskOrQuery, props);
		});

		afterAll(() => {
			props = null;
			reflector = null;
		});

		it('should map flask props', () => {
			expect(reflector.props.diameter).toBe(props.query.flask.diameter);
			expect(reflector.props.height).toBe(props.query.flask.height);
			expect(reflector.props.presets).toBe(props.query.flask.presets);
			expect(reflector.props.preset).toBe(props.query.flask.preset);
		});
	});

	const preset = Object.keys(presets)[0];
	const flask = presets[preset];
	const flaskProps = { flask, preset, presets };
	const presetChange = { target: { value: 'bobo' } };
	const diameterChange = { target: { value: 13 } };
	const heightChange = { target: { value: 66 } };
});
