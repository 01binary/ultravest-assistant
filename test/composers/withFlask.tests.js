import reflect from '../fixtures/reflector.tests.fixture';
import { withFlask, CUSTOM_PRESET, DEFAULT_PRESET } from '../../src/composers/withFlask';
import presets from '../../src/config/flaskPresets.json';

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
			diameter: presets[DEFAULT_PRESET],
			height: presets[DEFAULT_PRESET]
		});
	});

	test('should set flask preset', done => {
		const arbitraryPreset = Object.keys(presets)[2];

		reflector.props.setFlaskPreset({ target: { value: arbitraryPreset } });

		reflector.update(props => {
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
		reflector.props.setFlaskDiameter({ target: { value: 6 } });

		reflector.update(props => {
			expect(reflector.props.flask.diameter)
				.toEqual(6, 'should set diameter');
			expect(reflector.props.flask.preset)
				.toEqual(CUSTOM_PRESET, 'should set preset name');

			done();
		});
	});

	test('should set flask height', done => {
		reflector.props.setFlaskHeight({ target: { value: 13 } });

		reflector.update(props => {
			expect(reflector.props.flask.height)
				.toEqual(13, 'should set height');
			expect(reflector.props.flask.preset)
				.toEqual(CUSTOM_PRESET);

			done();
		});
	});
});
