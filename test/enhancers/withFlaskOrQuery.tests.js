import reflect from '../fixtures/reflector.tests.fixture';
import withFlaskOrQuery from '../../src/enhancers/withFlaskOrQuery';
import presets from '../../src/config/flaskPresets.json';

describe('enhancer withFlaskOrQuery', () => {

	describe('with no overrides', () => {

		let reflector, props;

		beforeAll(() => {
			props = {
				query: {},
				flask: flaskProps,
				handleFlaskPresetChange: jest.fn(),
				handleFlaskDiameterChange: jest.fn(),
				handleFlaskHeightChange: jest.fn(),
				handleAddFlaskPreset: jest.fn(),
				handleRemoveFlaskPreset: jest.fn(),
				handleQueryParamChange: jest.fn()
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
			reflector.props.handleQueryPresetChange({ target: { value: 'bobo' } });
			expect(props.handleQueryParamChange).toHaveBeenCalledWith('flask.preset', 'bobo');
		});

		it('should map handleQueryDiameterChange handler', () => {
			reflector.props.handleQueryDiameterChange({ target: { value: 13 } });
			expect(props.handleQueryParamChange).toHaveBeenCalledWith('flask.diameter', 13);
		});

		it('should map handleQueryHeightChange handler', () => {
			reflector.props.handleQueryHeightChange({ target: { value: 66 } });
			expect(props.handleQueryParamChange).toHaveBeenCalledWith('flask.height', 66);
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
				flask: flaskProps
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
});
