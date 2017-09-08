import { h, render } from 'preact';

/**
 * Renders an instance of the specified component.
 * @param {function} componentFactory - The component to render.
 * @returns {object} - The rendered Dom tree.
 */
export default (componentFactory) => (
	render(h(componentFactory))
);
