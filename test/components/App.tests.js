import { h } from 'preact';
import { shallow } from 'preact-render-spy';
import App from '../../src/components/App';
import Flask from '../../src/components/Flask';
import Investment from '../../src/components/Investment';
import Burnout from '../../src/components/Burnout';
import Summary from '../../src/components/Summary';
import Result from '../../src/components/Result';
import withState from '../../src/composers';

describe('App', () => {

	let wrapper;

	before(() => {
		wrapper = shallow(withState(App));
	});

	after(() => {
		wrapper = null;
	});

	test('should render', () => {
		// TODO: toMatchSnapshot
	});

	test('should render Flask', () => {
		expect(wrapper.find(Flask)).toHaveLength(1);
	});

	test('should render Investment', () => {
		expect(wrapper.find(Investment)).toHaveLength(1);
	});

	test('should render Burnout', () => {
		expect(wrapper.find(Burnout)).toHaveLength(1);
	});

	test('should render Result', () => {
		expect(wrapper.find(Result)).toHaveLength(1);
	});

	test('should render Summary', () => {
		expect(wrapper.find(Summary)).toHaveLength(1);
	});
});
