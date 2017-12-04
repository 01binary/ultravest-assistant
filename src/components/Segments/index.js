import { h } from 'preact';
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
						<span>&deg;F/hr</span>
					</td>
					<td>
						{temp}
						<span>&deg;F</span>
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
