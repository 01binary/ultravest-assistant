import { h } from 'preact';
import { deep } from 'preact-render-spy';
import { reduce, maxBy } from 'ramda';
import { Burnout } from '../../src/components/Burnout';
import getFlaskVolume from '../../src/selectors/getFlaskVolume';
import presets from '../../src/config/burnoutPresets';
import { VIEWS } from '../../src/enhancers/withView';

describe('Burnout', () => {

	let wrapper, props;

	describe('with segments view', () => {

		beforeAll(() => {
			props = {
				view: VIEWS.SEGMENTS,
				schedule: preset.segments,
				handleViewChange: jest.fn()
			};

			wrapper = deep(
				<Burnout {...props} />
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
			props = {
				view: VIEWS.STEPS,
				schedule: preset.segments,
				handleViewChange: jest.fn()
			};

			wrapper = deep(
				<Burnout {...props} />
			);
		});
	
		afterAll(() => {
			wrapper = null;
		});

		it('should render all segments with negative tab index', () => {
			expect(wrapper).toMatchSnapshot();
		});
	});

	const preset = reduce(maxBy(getFlaskVolume), presets[0], presets);
});
