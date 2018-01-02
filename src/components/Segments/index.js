import { h } from 'preact';
import Units from '../Units';
import getSegmentAnchor from '../../selectors/getSegmentAnchor';
import { VIEWS } from '../../enhancers/withView';

/**
 * Program table
 * @param {object[]} segments - The program segments.
 * @param {string} view - The current view provided by withView.
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
