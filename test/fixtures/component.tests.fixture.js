import { h, render } from 'preact';
import { expect } from 'chai';

/**
 * Renders an instance of the specified component.
 * @param {function} componentFactory - The component to render.
 * @returns {object} - The rendered Dom tree.
 */
export function wrap(componentFactory) {
	return render(h(componentFactory));
}

export function expectChild(wrapper, nodeName, message) {
	expect(findNode(wrapper, nodeName))
		.to.have.length(1, message);
}

export function expectComponent(wrapper, component, message) {
	expect(findComponent(wrapper, component))
		.to.have.length(1, message);
}

export function expectTag(wrapper, tagName, message) {
	expect(wrapper.nodeName.toLowerCase() === tagName)
		.to.equal(true, message);
}

export function expectParentTag(elements, tagName, message) {
	const parentHasTag = expectParentTagSingle(tagName, message);

	Array.isArray(elements) ?
		elements.forEach(element => parentHasTag) :
		parentHasTag(elements);
}

const expectParentTagSingle = (tagName, message) => (element) =>
	expect(element.parentNode.nodeName.toLowerCase() === tagName)
		.to.equal(true, message);

export function expectAttribute(wrapper, name, value, message) {
	expect(wrapper.attributes.filter(attribute =>
		attribute.name.toLowerCase() === name &&
		attribute.value === value
	)).to.have.length(1, message);
}

export function findNode(parent, nodeName) {
	let matches = parent.childNodes.filter(
		node => node.nodeName.toLowerCase() === nodeName
	);

	parent.childNodes.forEach(
		child => findNode(child, nodeName).map(found => matches.push(found))
	);

	return matches;
}

export function findComponent(parent, component) {
	let matches = parent.childNodes.filter(
		node => node._componentConstructor === component
	);

	parent.childNodes.forEach(
		child => findComponent(child, component).map(found => matches.push(found))
	);

	return matches;
}
