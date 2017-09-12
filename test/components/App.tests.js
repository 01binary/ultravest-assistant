import { h } from 'preact';
import { deep } from 'preact-render-spy';
import App from '../../src/components/App';
import withState from '../../src/composers';
/*
describe('App', () => {

	let wrapper;

	beforeAll(() => {
		wrapper = deep(h(withState(App)));
	});

	afterAll(() => {
		wrapper = null;
	});

	test('should render', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should render Flask', () => {
		expect(wrapper.find('Flask').length).toBe(1);
	});

	test('should render Investment', () => {
		expect(wrapper.find('Investment').length).toBe(1);
	});

	test('should render Burnout', () => {
		expect(wrapper.find('Burnout').length).toBe(1);
	});

	test('should render Result', () => {
		expect(wrapper.find('Result').length).toBe(1);
	});

	test('should render Summary', () => {
		expect(wrapper.find('Summary').length).toBe(1);
	});
});
*/