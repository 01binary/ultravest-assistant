import { expect } from 'chai';
import Reflector from '../fixtures/reflector.tests.fixture';
import withFlask from '../../src/composers/withFlask';
import flaskPresets from '../../src/config/flaskPresets.json';

describe('composer withFlask', () => {

	let wrapper;

	before(() => {
		wrapper = new Reflector(withFlask);
	});

	after(() => {
		wrapper = null;
	});

	it('should initialize with default state', () => {
		expect(wrapper.props.flask).to.eql({
			preset: '3.5 X 10',
			presets: flaskPresets,
			diameter: 3.5,
			height: 10
		});
	});

	it('should set state', () => {
		const anotherPreset = Object.keys(flaskPresets)[1];
		const nextState = {
			presets: flaskPresets,
			preset: anotherPreset,
			diameter: flaskPresets[anotherPreset].diameter,
			height: flaskPresets[anotherPreset].height
		};
		
		wrapper.props.setFlask(nextState);
		global.console.log('ensuring flask is', nextState);
		expect(wrapper.props.flask).to.eql(nextState);
	});
});
