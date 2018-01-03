import { h } from 'preact';
import { deep } from 'preact-render-spy';
import { reduce, minBy, maxBy } from 'ramda';
import Burnout from '../../src/components/Burnout';
import getFlaskVolume from '../../src/selectors/getFlaskVolume';
import presets from '../../src/config/burnoutPresets';
import { VIEWS } from '../../src/enhancers/withView';

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
	
		it('should render last marker', () => {
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

		it('should not render last marker', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('with segments view', () => {

		beforeAll(() => {
			wrapper = deep(
				<Burnout flask={firstPreset} view={VIEWS.SEGMENTS} />
			);
		});
	
		afterAll(() => {
			wrapper = null;
		});

		it('should render all steps with negative tab index', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	describe('with steps view', () => {

		beforeAll(() => {
			wrapper = deep(
				<Burnout flask={firstPreset} view={VIEWS.STEPS} />
			);
		});
	
		afterAll(() => {
			wrapper = null;
		});

		it('should render all segments with negative tab index', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	const firstPreset = reduce(minBy(getFlaskVolume), presets[0], presets);
	const lastPreset = reduce(maxBy(getFlaskVolume), presets[0], presets);
});
