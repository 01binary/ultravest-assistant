import { expect } from 'chai';
import App from '../../src/components/App';
import Flask from '../../src/components/Flask';
import Investment from '../../src/components/Investment';
import Burnout from '../../src/components/Burnout';
import Summary from '../../src/components/Summary';
import Result from '../../src/components/Result';
import withState from '../../src/composers';
import {
	mount,
	expectParentTag
} from '../fixtures/component.tests.fixture';

describe('App', () => {

	let wrapper;

	before(() => {
		wrapper = mount(withState(App));
	});

	after(() => {
		wrapper = null;
	});

	it('should render wrapper', () => {
		expect(wrapper).to.have.tagName('div', 'should render div');
		expect(wrapper).to.have.attribute('id', 'app');
	});

	it('should render Flask', () => {
		const flask = wrapper.find(Flask);

		expect(flask).to.have.length(1, 'should render a single Flask component');
		expectParentTag(flask, 'main', 'should render Flask inside main');
	});

	it('should render Investment', () => {
		const investment = wrapper.find(Investment);

		expect(investment).to.have.length(1,
			'should render a single Investment component');
		expectParentTag(investment, 'main',
			'should render Investment inside main');
	});

	it('should render Burnout', () => {
		const burnout = findComponent(wrapper, Burnout);

		expect(burnout).to.have.length(1,
			'should render a single Burnout component');
		expectParentTag(burnout, 'main',
			'should render Burnout inside main');
	});

	it('should render Result', () => {
		const result = findComponent(wrapper, Result);

		expect(result).to.have.length(1,
			'should render a single Result component');
		expectParentTag(result, 'main',
			'should render Result inside main');
	});

	it('should render Summary', () => {
		const summary = findComponent(wrapper, Summary);

		expect(summary).to.have.length(1,
			'should render a single Summary component');
		expectParentTag(summary, 'aside',
			'should render Summary in aside');
	});
});
