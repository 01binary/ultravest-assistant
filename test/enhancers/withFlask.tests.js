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
		const arbitraryPreset = Object.keys(presets)[2];

		reflector.props.handleFlaskPresetChange({
			target: { value: arbitraryPreset }
		});

		reflector.update(props => {
			expect(props.flask.presets)
				.toEqual(presets, 'should retain presets');
			expect(props.flask.preset)
				.toEqual(arbitraryPreset, 'should set preset name');
			expect(props.flask.diameter)
				.toEqual(presets[arbitraryPreset].diameter, 'should set preset diameter');
			expect(props.flask.height)
				.toEqual(presets[arbitraryPreset].height, 'should set preset height');

			done();
		});
	});

	test('should set flask diameter', done => {
		reflector.props.handleFlaskDiameterChange({
			target: { value: 6.2 }
		});

		reflector.update(props => {
			expect(reflector.props.flask.diameter)
				.toEqual(6.2, 'should set diameter');
			expect(reflector.props.flask.height)
				.toEqual(presets[DEFAULT_PRESET].height, 'should retain flask height');
			expect(reflector.props.flask.preset)
				.toEqual(CUSTOM_PRESET, 'should set preset name');
			expect(props.flask.presets)
				.toEqual(presets, 'should keep presets');

			done();
		});
	});

	test('should set flask height', done => {
		reflector.props.handleFlaskHeightChange({
			target: { value: 13.5 }
		});

		reflector.update(props => {
			expect(reflector.props.flask.height)
				.toEqual(13.5, 'should set height');
			expect(reflector.props.flask.diameter)
				.toEqual(6.2, 'should retain diameter');
			expect(reflector.props.flask.preset)
				.toEqual(CUSTOM_PRESET, 'should set preset name');
			expect(props.flask.presets)
				.toEqual(presets, 'should keep presets');

			done();
		});
	});
});
