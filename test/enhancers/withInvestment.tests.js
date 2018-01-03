import {
	default as withInvestment,
	DEFAULT_PRESET
} from '../../src/enhancers/withInvestment';
import presets from '../../src/config/investmentPresets.json';
import reflect from '../fixtures/reflector.tests.fixture';

describe('enhancer withInvestment', () => {

	let reflector;

	beforeAll(() => {
		reflector = reflect(withInvestment);
	});

	afterAll(() => {
		reflector = null;
	});

	it('should set initial state', () => {
		expect(reflector.props.investment).toEqual({
			preset: DEFAULT_PRESET,
			presets
		});
	});

	it('should set investment preset', done => {
		const arbitraryPreset = Object.keys(presets)[2];
		
		reflector.props.handleInvestmentPresetChange({
			target: { value: arbitraryPreset }
		});

		reflector.update(() => {
			expect(reflector.props.investment.preset)
				.toEqual(arbitraryPreset, 'should set preset');
			expect(reflector.props.investment.presets)
				.toEqual(presets, 'should retain presets');

			done();
		});
	});
});
