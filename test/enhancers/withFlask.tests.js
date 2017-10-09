import {
	default as withFlask,
	CUSTOM_PRESET,
	DEFAULT_PRESET
} from '../../src/enhancers/withFlask';
import presets from '../../src/config/flaskPresets.json';
import reflect from '../fixtures/reflector.tests.fixture';

describe('composer withFlask', () => {

	let reflector;

	beforeAll(() => {
		reflector = reflect(withFlask);
	});

	afterAll(() => {
		reflector = null;
	});

	test('should set initial state', () => {
		expect(reflector.props.flask).toEqual({
			presets,
			preset: DEFAULT_PRESET,
			diameter: presets[DEFAULT_PRESET].diameter,
			height: presets[DEFAULT_PRESET].height
		});
	});

	test('should set flask preset', done => {
		const expected = Object.keys(reflector.props.flask.presets)[2];

		reflector.props.handleFlaskPresetChange({
			target: { value: expected }
		});

		reflector.update(props => {
			expect(props.flask.presets)
				.toEqual(presets);
			expect(props.flask.preset)
				.toEqual(expected);
			expect(props.flask.diameter)
				.toEqual(presets[expected].diameter);
			expect(props.flask.height)
				.toEqual(presets[expected].height);

			done();
		});
	});

	test('should set flask diameter', done => {
		reflector.props.handleFlaskDiameterChange({
			target: { value: 6.2 }
		});

		reflector.update(props => {
			expect(reflector.props.flask.diameter)
				.toEqual(6.2);
			expect(reflector.props.flask.height)
				.toEqual(presets[DEFAULT_PRESET].height);
			expect(reflector.props.flask.preset)
				.toEqual(CUSTOM_PRESET);
			expect(props.flask.presets)
				.toEqual(presets);

			done();
		});
	});

	test('should set flask height', done => {
		reflector.props.handleFlaskHeightChange({
			target: { value: 13.5 }
		});

		reflector.update(props => {
			expect(reflector.props.flask.height)
				.toEqual(13.5);
			expect(reflector.props.flask.diameter)
				.toEqual(6.2);
			expect(reflector.props.flask.preset)
				.toEqual(CUSTOM_PRESET);
			expect(props.flask.presets)
				.toEqual(presets);

			done();
		});
	});

	test('should add flask preset', done => {
		reflector.props.handleAddFlaskPreset();

		reflector.update(props => {
			expect(reflector.props.flask.preset)
				.toEqual('6.2 × 13.5');
			expect(reflector.props.flask.diameter)
				.toEqual(6.2);
			expect(reflector.props.flask.height)
				.toEqual(13.5);
			expect(props.flask.presets)
				.toEqual(Object.assign({}, presets, {
					'6.2 × 13.5': {
						diameter: 6.2,
						height: 13.5
					}
				}));

			done();
		});
	});

	test('should keep added flask preset when setting diameter', done => {
		const expected = Object.assign({}, reflector.props.flask.presets);

		reflector.props.handleFlaskDiameterChange({
			target: { value: 1.5 }
		});

		reflector.update(props => {
			expect(reflector.props.flask.diameter)
				.toEqual(1.5);
			expect(reflector.props.flask.preset)
				.toEqual(CUSTOM_PRESET);
			expect(reflector.props.flask.presets)
				.toEqual(expected);

			done();
		});
	});

	test('should keep added flask preset when setting height', done => {
		const expected = Object.assign({}, reflector.props.flask.presets);

		reflector.props.handleFlaskHeightChange({
			target: { value: 9.3 }
		});

		reflector.update(props => {
			expect(reflector.props.flask.height)
				.toEqual(9.3);
			expect(reflector.props.flask.preset)
				.toEqual(CUSTOM_PRESET);
			expect(reflector.props.flask.presets)
				.toEqual(expected);

			done();
		});
	});

	test('should keep added flask preset when setting another preset', done => {
		const another = Object.keys(presets)[1];
		const expected = Object.assign({}, reflector.props.flask.presets);
		
		reflector.props.handleFlaskPresetChange({
			target: { value: another }
		});

		reflector.update(props => {
			expect(props.flask.presets)
				.toEqual(expected);
			expect(props.flask.preset)
				.toEqual(another);

			done();
		});
	});

	test('should not add flask preset if already added', done => {
		const before = reflector.props.flask.presets.length;

		reflector.props.handleFlaskPresetChange({
			target: { value: '6.2 × 13.5' }
		});

		reflector.props.handleAddFlaskPreset();

		reflector.update(props => {
			expect(props.flask.presets.length)
				.toEqual(before);

			done();
		});
	});

	test('should remove added flask preset and switch to the one before', done => {
		const presetNames = Object.keys(reflector.props.flask.presets);
		const next = presetNames[
			presetNames.indexOf(reflector.props.flask.preset) - 1
		];

		reflector.props.handleRemoveFlaskPreset();

		reflector.update(props => {
			expect(props.flask.preset)
				.toEqual(next);

			done();
		});
	});

	test('should remove second to last preset and switch to the one after', done => {
		const presetNames = Object.keys(reflector.props.flask.presets);
		const remove = presetNames[presetNames.length - 2];
		const next = presetNames[presetNames.length - 1];

		reflector.props.handleFlaskPresetChange({
			target: { value: remove }
		});
		
		reflector.props.handleRemoveFlaskPreset();

		reflector.update(props => {
			expect(props.flask.preset)
				.toEqual(next);

			done();
		});
	});

	test('should set current preset to null when last remaining preset is removed', done => {
		Object
			.keys(reflector.props.flask.presets)
			.forEach(preset => reflector.props.handleRemoveFlaskPreset());

		reflector.update(props => {
			expect(props.flask.preset)
				.toEqual(null);

			done();
		});
	});
});
