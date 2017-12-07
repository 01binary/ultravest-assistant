import { h } from 'preact';
import utilityStyle from '../App/style/utility';

/**
 * Accessible units
 * @param {string} display - The abbrevviated units text to render.
 * @param {string} alt - The accessible units text to render.
 * @returns {function} - A functional component.
 */
const Units = ({ display, alt }) => (
	<span aria-hidden="true">
		{display}
		<span class={utilityStyle.offScreen}>
			{alt}
		</span>
	</span>
);

export default Units;
