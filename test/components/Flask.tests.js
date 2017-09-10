import { h } from 'preact';
import { expect } from 'chai';
import { mount } from 'enzyme';
import withFlask from '../../src/composers/withFlask';
import Flask from '../../src/components/Flask';

describe('Flask', () => {

	let wrapper;

	before(() => {
		wrapper = mount(withFlask(<Flask />));
	});

	after(() => {
		wrapper = null;
	});

	it('should render', () => {
		expect(wrapper.hasClass('flask')).to.equal(true);
	});
});
