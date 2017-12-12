import { h } from 'preact';
import utilityStyle from '../App/style/utility';

/**
 * Accessible units
 * @param {string} children - The abbreviated units text to render as child.
 * @param {string} alt - The accessible units text to render.
 * @returns {function} - A functional component.
 */
const Units = ({ children, alt }) => (
	<span aria-hidden="true">
		{children}
		<span class={utilityStyle.offScreen}>
			{alt}
		</span>
	</span>
);

export default Units;
