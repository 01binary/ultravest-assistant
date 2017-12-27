import { h } from 'preact';
import { deep } from 'preact-render-spy';
import { reduce, minBy, maxBy } from 'ramda';
import Burnout from '../../src/components/Burnout';
import getFlaskVolume from '../../src/selectors/getFlaskVolume';
import presets from '../../src/config/burnoutPresets';

describe('Burnout', () => {

	let wrapper;

	describe('with last burnout preset', () => {

		beforeAll(() => {
			wrapper = deep(
				<Burnout flask={lastPreset} />
			);
		});
	
		afterAll(() => {
			wrapper = null;
		});
	
		test('should render last marker', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('with first burnout preset', () => {

		beforeAll(() => {
			wrapper = deep(
				<Burnout flask={firstPreset} />
			);
		});
	
		afterAll(() => {
			wrapper = null;
		});

		test('should not render last marker', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	const firstPreset = reduce(minBy(getFlaskVolume), presets[0], presets);
	const lastPreset = reduce(maxBy(getFlaskVolume), presets[0], presets);
});
