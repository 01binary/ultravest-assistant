import { h } from 'preact';
import { expect } from 'chai';
import App from '../../src/components/App';

describe('App', () => {

	it('should render wrapper', () => {
		expect(<App />).to.contain(<div id="app" />);
	});

	it('should render Flask');

	it('should render Investment');

	it('should render Burnout');

	it('should render Result');

	it('should render Summary');
});
