import { h } from 'preact';
import { deep } from 'preact-render-spy';
import App from '../../src/index.js';

describe('App', () => {

	let wrapper;

	beforeAll(() => {
		wrapper = deep(<App />);
	});

	afterAll(() => {
		wrapper = null;
	});

	it('should render Header', () => {
		expect(wrapper.find('Header').length).toBe(1);
	});

	it('should render Flask', () => {
		expect(wrapper.find('mapProps(Flask)').length).toBe(1);
	});

	it('should render Investment', () => {
		expect(wrapper.find('mapProps(Investment)').length).toBe(1);
	});

	it('should render Burnout', () => {
		expect(wrapper.find('mapProps(Burnout)').length).toBe(1);
	});

	it('should render Footer', () => {
		expect(wrapper.find('Footer').length).toBe(1);
	});
});
