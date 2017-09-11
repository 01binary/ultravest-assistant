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

	test('should set flask', (done) => {
		const nextState = {
			presets,
			preset: secondPreset,
			diameter: presets[secondPreset].diameter,
			height: presets[secondPreset].height
		};
		
		wrapper.props.setFlask(nextState, () => {
			expect(wrapper.props.flask).toEqual(nextState);
			done();
		});
	});

	test('should set flask preset', (done) => {
		wrapper.props.setFlaskPreset(thirdPreset, () => {
			expect(wrapper.props.flask.preset)
				.toEqual(thirdPreset, 'should set preset name');
			expect(wrapper.props.flask.diameter)
				.toEqual(presets[thirdPreset].diameter, 'should set preset diameter');
			expect(wrapper.props.flask.height)
				.toEqual(presets[thirdPreset].height, 'should set preset height');

			done();
		});
	});

	test('should set flask diameter', (done) => {
		wrapper.props.setFlaskDiameter(6, () => {
			expect(wrapper.props.flask.diameter)
				.toEqual(6, 'should set diameter');
			expect(wrapper.props.flask.preset)
				.toEqual('Custom', 'should set preset name');
			done();
		});
	});

	test('should set flask height', () => {
		wrapper.props.setFlaskHeight(13, () => {
			expect(wrapper.props.flask.height)
				.toEqual(13, 'should set height');
			expect(wrapper.props.flask.preset)
				.toEqual('Custom');
		});
	});

	const defaultPreset = getDefaultPresetName(presets);
	const secondPreset = Object.keys(presets)[1];
	const thirdPreset = Object.keys(presets)[2];
});
