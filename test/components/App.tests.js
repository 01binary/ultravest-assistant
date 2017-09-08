import { h, render } from 'preact';
import { expect } from 'chai';
import withState from '../../src/composers';
import App from '../../src/components/App';

describe('App', () => {

	let wrapper;

	before(() => {
		wrapper = render(withState(<App />), global.document);
		console.log(wrapper);
	});

	after(() => {
		wrapper = null;
	});

	it('should render wrapper', () => {
		
		expect(wrapper.nodeName).to.equal('DIV');
		expect(wrapper.attributes).to.contain({
			name: 'id',
			value: 'app'
		});
	});

	it('should render Flask');

	it('should render Investment');

	it('should render Burnout');

	it('should render Result');

	it('should render Summary');
});
