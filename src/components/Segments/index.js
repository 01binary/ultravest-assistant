import { h } from 'preact';
import Units from '../Units';
import getSegmentAnchor from '../../selectors/getSegmentAnchor';
import { VIEWS } from '../../enhancers/withView';

/**
 * Program table
 * @param {Object[]} segments - The program segments provided by Program.
 * @param {string} view - The current view provided by Program.
 * @returns {JSX.Element} - A stateless component.
 */
const Segments = ({ segments, view  }) => (
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
						<a
							href={`#${getSegmentAnchor(name)}`}
							tabIndex={view === VIEWS.SEGMENTS ? 0 : -1}
						>
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
