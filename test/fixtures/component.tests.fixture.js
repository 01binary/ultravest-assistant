import { h, render } from 'preact';

/**
 * Renders an instance of the specified component.
 * @param {function} componentFactory - The component to render.
 * @returns {object} - The rendered Dom tree.
 */
export function mount(componentFactory) {
	let wrapper = render(h(componentFactory));

	wrapper.find = find;

	return wrapper;
}

function find(search) {
	return typeof search === 'function' ?
		findComponent(this, search) :
		findNode(this, search);
}

function findNode(parent, nodeName) {
	let matches = parent.childNodes.filter(
		node => node.nodeName.toLowerCase() === nodeName
	);

	parent.childNodes.forEach(
		child => findNode(child, nodeName).map(found => matches.push(found))
	);

	return matches;
}

function findComponent(parent, component) {
	let matches = parent.childNodes.filter(
		node => node._componentConstructor === component
	);

	parent.childNodes.forEach(
		child => findComponent(child, component).map(found => matches.push(found))
	);

	return matches;
}
