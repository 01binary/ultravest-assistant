
import { expect } from 'chai';
import render from '../fixtures/component.tests.fixture';
import withState from '../../src/composers';
import App from '../../src/components/App';

describe('App', () => {

	let wrapper;

	before(() => {
		wrapper = render(withState(App));
		console.log(wrapper);
	});

	after(() => {
		wrapper = null;
	});

	it('should render wrapper', () => {
		expect(wrapper.nodeName).to.equal('DIV',
			'should render a div');
		expect(wrapper.attributes[0]).to.eql({
			ns: null,
			name: 'id',
			value: 'app'
		}, 'should set div id to app');
	});

	it('should render Flask');

	it('should render Investment');

	it('should render Burnout');

	it('should render Result');

	it('should render Summary');
});
