import reflect from '../fixtures/reflector.tests.fixture';
import withInvestment from '../../src/composers/withInvestment';
import getDefaultPresetName from '../../src/selectors/getDefaultPresetName';
import presets from '../../src/config/investmentPresets.json';

describe('composer withInvestment', () => {

	let wrapper;

	beforeAll(() => {
		wrapper = reflect(withInvestment);
	});

	afterAll(() => {
		wrapper = null;
	});

	test('should set initial state', () => {
		const initialState = {
			preset: defaultPreset,
			presets
		};

		expect(wrapper.props.investment).toEqual(initialState);
	});

	test('should set investment', (done) => {
		const nextState = {
			preset: secondPreset,
			presets
		};
		
		wrapper.props.setInvestment(nextState, () => {
			expect(wrapper.props.investment).toEqual(nextState);
			done();
		});
	});

	test('should set investment preset', (done) => {
		wrapper.props.setInvestmentPreset(thirdPreset, () => {
			expect(wrapper.props.investment.preset).toEqual(thirdPreset);
			done();
		});
	});

	const defaultPreset = getDefaultPresetName(presets);
	const secondPreset = Object.keys(presets)[1];
	const thirdPreset = Object.keys(presets)[2];
});
