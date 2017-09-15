
import { h } from 'preact';
import getDefaultPresetName from '../../selectors/getDefaultPresetName';
import flaskPresets from '../../config/flaskPresets';
import investmentPresets from '../../config/investmentPresets';

const Result = ({ flask, investment }) =>

(
	<p>
		Enter your flask size and the investment-to-water ratio to see how much investment and water are required.
		The kiln program is calculated automatically.

		<input type="submit" />
	</p>
);

export default Result;
