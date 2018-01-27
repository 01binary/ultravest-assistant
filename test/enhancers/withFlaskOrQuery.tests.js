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
				handleRemoveFlaskPreset: jest.fn()
			};

			reflector = reflect(withFlaskOrQuery, props);
		});

		afterAll(() => {
			props = null;
			reflector = null;
		});

		it('should map props', () => {
			expect(reflector.props.diameter).toBe(props.flask.diameter);
			expect(reflector.props.height).toBe(props.flask.height);
			expect(reflector.props.presets).toBe(props.flask.presets);
			expect(reflector.props.preset).toBe(props.flask.preset);

			expect(reflector.props.handleFlaskPresetChange)
				.toBe(props.handleFlaskPresetChange);
			expect(reflector.props.handleFlaskDiameterChange)
				.toBe(props.handleFlaskDiameterChange);
			expect(reflector.props.handleFlaskHeightChange)
				.toBe(props.handleFlaskHeightChange);
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
				handleFlaskPresetChange: jest.fn(),
				handleFlaskDiameterChange: jest.fn(),
				handleFlaskHeightChange: jest.fn(),
				handleAddFlaskPreset: jest.fn(),
				handleRemoveFlaskPreset: jest.fn()
			};

			reflector = reflect(withFlaskOrQuery, props);
		});

		afterAll(() => {
			props = null;
			reflector = null;
		});

		it('should map props', () => {
			expect(reflector.props.diameter).toBe(props.query.flask.diameter);
			expect(reflector.props.height).toBe(props.query.flask.height);
			expect(reflector.props.presets).toBe(props.query.flask.presets);
			expect(reflector.props.preset).toBe(props.query.flask.preset);

			expect(reflector.props.handleFlaskPresetChange)
				.toBe(props.handleFlaskPresetChange);
			expect(reflector.props.handleFlaskDiameterChange)
				.toBe(props.handleFlaskDiameterChange);
			expect(reflector.props.handleFlaskHeightChange)
				.toBe(props.handleFlaskHeightChange);
			expect(reflector.props.handleAddFlaskPreset)
				.toBe(props.handleAddFlaskPreset);
			expect(reflector.props.handleRemoveFlaskPreset)
				.toBe(props.handleRemoveFlaskPreset);
		});
	});

	const preset = Object.keys(presets)[0];
	const flask = presets[preset];
	const flaskProps = { flask, preset, presets };
});
