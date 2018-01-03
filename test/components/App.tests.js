import { h } from 'preact';
import { deep } from 'preact-render-spy';
import Root from '../../src/index.js';

describe('App', () => {

	let wrapper;

	beforeAll(() => {
		wrapper = deep(h(Root));
	});

	afterAll(() => {
		wrapper = null;
	});

	it('should render', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should render Flask', () => {
		expect(wrapper.find('Flask').length).toBe(1);
	});

	it('should render Investment', () => {
		expect(wrapper.find('Investment').length).toBe(1);
	});

	it('should render Burnout', () => {
		expect(wrapper.find('Burnout').length).toBe(1);
	});
});
