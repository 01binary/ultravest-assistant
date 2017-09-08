import { expect } from 'chai';
import reflect from '../fixtures/reflector.tests.fixture';
import withFlask from '../../src/composers/withFlask';
import flaskPresets from '../../src/config/flaskPresets.json';

describe('composer withFlask', () => {

	let wrapper;

	before(() => {
		wrapper = reflect(withFlask);
	});

	after(() => {
		wrapper = null;
	});

	it('should initialize with default state', () => {
		const initialState = {
			preset: '3.5 X 10',
			presets: flaskPresets,
			diameter: 3.5,
			height: 10
		};

		expect(wrapper.props.flask).to.eql(initialState);
	});

	it('should set state', (done) => {
		const anotherPreset = Object.keys(flaskPresets)[1];
		const nextState = {
			presets: flaskPresets,
			preset: anotherPreset,
			diameter: flaskPresets[anotherPreset].diameter,
			height: flaskPresets[anotherPreset].height
		};
		
		wrapper.props.setFlask(nextState, () => {
			expect(wrapper.props.flask).to.eql(nextState);
			done();
		});
	});

	it('should set flask diameter', (done) => {
		wrapper.props.setFlaskDiameter(6
	});

	it('should set flask height', () => {
	
	});
});
