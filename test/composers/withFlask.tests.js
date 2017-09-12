import reflect from '../fixtures/reflector.tests.fixture';
import withFlask from '../../src/composers/withFlask';
import getDefaultPresetName from '../../src/selectors/getDefaultPresetName';
import presets from '../../src/config/flaskPresets.json';

describe('composer withFlask', () => {

	let wrapper;

	beforeAll(() => {
		wrapper = reflect(withFlask);
	});

	afterAll(() => {
		wrapper = null;
	});

	test('should set initial state', () => {
		const initialState = {
			presets,
			preset: defaultPreset,
			diameter: 3.5,
			height: 10
		};

		expect(wrapper.props.flask).toEqual(initialState);
	});

	test('should set flask preset', () => {
		wrapper.props.setFlaskPreset(event(anotherPreset));
		console.log('checking flask preset');
		expect(wrapper.props.flask.preset)
			.toEqual(anotherPreset, 'should set preset name');
		expect(wrapper.props.flask.diameter)
			.toEqual(presets[anotherPreset].diameter, 'should set preset diameter');
		expect(wrapper.props.flask.height)
			.toEqual(presets[anotherPreset].height, 'should set preset height');
	});

	test('should set flask diameter', () => {
		wrapper.props.setFlaskDiameter(event(6));

		expect(wrapper.props.flask.diameter)
			.toEqual(6, 'should set diameter');
		expect(wrapper.props.flask.preset)
			.toEqual('Custom', 'should set preset name');
	});

	test('should set flask height', () => {
		wrapper.props.setFlaskHeight(event(13));

		expect(wrapper.props.flask.height)
			.toEqual(13, 'should set height');
		expect(wrapper.props.flask.preset)
			.toEqual('Custom');
	});

	const defaultPreset = getDefaultPresetName(presets);
	const anotherPreset = Object.keys(presets)[2];

	function event(value) {
		return { target: { value } };
	}
});
