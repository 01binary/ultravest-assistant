
import { h } from 'preact';

/**
 * Calculation result
 * @param {object} flask - The flask props.
 * @param {object} investment - The investment props.
 * 
 */
const Result = (
	{
		flask,
		investment,
		showHelpText,
		handleShowHelpText
	}) => showHelpText && (

	<p>
		Calculate investment and water required to fill a flask and a kiln program to burn it out.

		<input type="submit" value="Calculate" onClick={handleShowHelpText} />
	</p>
);

export default Result;
