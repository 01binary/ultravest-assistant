import { h } from 'preact';
import { deep } from 'preact-render-spy';
import Segment from '../../src/components/Segment';
import presets from '../../src/config/burnoutPresets';

describe('Segment', () => {

	let wrapper;

	beforeAll(() => {
		wrapper = deep(
			<Segment {...props} />
		);
	});

	afterAll(() => {
		wrapper = null;
	});

	test('should render', () => {
		expect(wrapper).toMatchSnapshot();
	});

	const first = Object.keys(presets)[0];
	const schedule = presets[first].schedule;
	const cur = schedule[1];
	const prev = schedule[0];
	const props = { cur, prev };
});
