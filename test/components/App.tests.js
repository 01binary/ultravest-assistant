import { shallow } from 'preact-render-spy';
import { h } from 'preact';
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

	it('should render', () => {
		
	});

	it('should render Flask', () => {
		expect(wrapper.find(Flask)).to.have.length(1);
	});

	it('should render Investment', () => {
		expect(wrapper.find(Investment)).to.have.length(1);
	});

	it('should render Burnout', () => {
		expect(wrapper.find(Burnout)).to.have.length(1);
	});

	it('should render Result', () => {
		expect(wrapper.find(Result)).to.have.length(1);
	});

	it('should render Summary', () => {
		expect(wrapper.find(Summary)).to.have.length(1);
	});
});
