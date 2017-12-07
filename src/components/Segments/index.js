import { h } from 'preact';
import Units from '../Units';
import getSegmentAnchor from '../../selectors/getSegmentAnchor';

/**
 * Program table
 * @param {obect[]} segments - The program segments.
 * @returns {JSX.Element} - A stateless component.
 */
const Segments = ({ segments }) => (
	<table>
		<thead>
			<tr>
				<th>segment</th>
				<th>rate</th>
				<th>temp</th>
				<th>hold</th>
			</tr>
		</thead>
		
		<tbody>
			{ segments.map(({ name, rate, temp, hold }) => (
				<tr>
					<td>
						<a href={`#${getSegmentAnchor(name)}`}>
							{name}
						</a>
					</td>
					<td>
						{rate}
						<Units alt="degrees Fahrenheit per hour">
							&deg;F/hr
						</Units>
					</td>
					<td>
						{temp}
						<Units alt="degrees Fahrenheit">
							&deg;F
						</Units>
					</td>
					<td>
						{`${hold} `}
						<span>hours</span>
					</td>
				</tr>
			))}
		</tbody>
	</table>
);

export default Segments;
