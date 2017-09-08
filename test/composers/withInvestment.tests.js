import { expect } from 'chai';
import reflect from '../fixtures/reflector.tests.fixture';
import withInvestment from '../../src/composers/withInvestment';
import getDefaultPresetName from '../../src/selectors/getDefaultPresetName';
import presets from '../../src/config/investmentPresets.json';

describe('composer withInvestment', () => {

	let wrapper;

	before(() => {
		wrapper = reflect(withInvestment);
	});

	after(() => {
		wrapper = null;
	});

	it('should set initial state', () => {
		const initialState = {
			preset: defaultPreset,
			presets
		};

		expect(wrapper.props.investment).to.eql(initialState);
	});

	it('should set investment', (done) => {
		const nextState = {
			preset: secondPreset,
			presets
		};
		
		wrapper.props.setInvestment(nextState, () => {
			expect(wrapper.props.investment).to.eql(nextState);
			done();
		});
	});

	it('should set investment preset', (done) => {
		wrapper.props.setInvestmentPreset(thirdPreset, () => {
			expect(wrapper.props.investment.preset).to.equal(thirdPreset);
			done();
		});
	});

	const defaultPreset = getDefaultPresetName(presets);
	const secondPreset = Object.keys(presets)[1];
	const thirdPreset = Object.keys(presets)[2];
});
