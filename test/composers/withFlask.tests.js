import { expect } from 'chai';
import reflect from '../fixtures/reflector.tests.fixture';
import withFlask from '../../src/composers/withFlask';
import getDefaultPresetName from '../../src/selectors/getDefaultPresetName';
import presets from '../../src/config/flaskPresets.json';

describe('composer withFlask', () => {

	let wrapper;

	before(() => {
		wrapper = reflect(withFlask);
	});

	after(() => {
		wrapper = null;
	});

	it('should set initial state', () => {
		const initialState = {
			presets,
			preset: defaultPreset,
			diameter: 3.5,
			height: 10
		};

		expect(wrapper.props.flask).to.eql(initialState);
	});

	it('should set flask', (done) => {
		const nextState = {
			presets,
			preset: secondPreset,
			diameter: presets[secondPreset].diameter,
			height: presets[secondPreset].height
		};
		
		wrapper.props.setFlask(nextState, () => {
			expect(wrapper.props.flask).to.eql(nextState);
			done();
		});
	});

	it('should set flask preset', (done) => {
		wrapper.props.setFlaskPreset(thirdPreset, () => {
			expect(wrapper.props.flask.preset)
				.to.equal(thirdPreset, 'should set preset name');
			expect(wrapper.props.flask.diameter)
				.to.equal(presets[thirdPreset].diameter, 'should set preset diameter');
			expect(wrapper.props.flask.height)
				.to.equal(presets[thirdPreset].height, 'should set preset height');

			done();
		});
	});

	it('should set flask diameter', (done) => {
		wrapper.props.setFlaskDiameter(6, () => {
			expect(wrapper.props.flask.diameter)
				.to.equal(6, 'should set diameter');
			expect(wrapper.props.flask.preset)
				.to.equal('Custom', 'should set preset name');
			done();
		});
	});

	it('should set flask height', () => {
		wrapper.props.setFlaskHeight(13, () => {
			expect(wrapper.props.flask.height)
				.to.equal(13, 'should set height');
			expect(wrapper.props.flask.preset)
				.to.equal('Custom');
		});
	});

	const defaultPreset = getDefaultPresetName(presets);
	const secondPreset = Object.keys(presets)[1];
	const thirdPreset = Object.keys(presets)[2];
});
