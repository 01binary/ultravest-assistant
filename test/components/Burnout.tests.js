import { h } from 'preact';
import { deep } from 'preact-render-spy';
import Burnout from '../../src/components/Burnout';
import withState from '../../src/composers';

describe('Burnout', () => {

	let wrapper;

	beforeAll(() => {
		wrapper = deep(h(withState(Burnout)));
	});

	afterAll(() => {
		wrapper = null;
	});

	test('should render', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
