
import { h } from 'preact';

const Result = ({ flask, investment }) => (
	<p>
		Enter your flask size and the investment-to-water ratio to see how much investment and water are required.
		The kiln program is calculated automatically.

		<input type="submit" value="Calculate" />
	</p>
);

export default Result;
