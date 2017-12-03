import { h } from 'preact';
import getBurnoutSteps from '../../selectors/getBurnoutSteps';
import getSegmentAnchor from '../../selectors/getSegmentAnchor';
import style from './style';

/**
 * Burnout steps
 * @param {object} segments - The burnout segments.
 * @param {bool} showSegments - Whether to show segments or steps.
 * @param {function} toggleSegmentView - Toggle between segment and step view.
 * @returns {JSX.Element} - A stateless component.
 */
const Steps = ({
	segments,
	showSegments,
	toggleSegmentView
}) => (
	<section class={style.steps}>
		<input
			type="radio"
			name="view"
			id="steps"
			value="steps"
			checked={!showSegments}
			onChange={toggleSegmentView}
		/>
		<label for="steps">steps</label>

		<input
			type="radio"
			name="view"
			id="segments"
			value="segments"
			checked={showSegments}
			onChange={toggleSegmentView}
		/>
		<label for="segments">segments</label>

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
				{ segments.map(({
					name,
					rate,
					temp,
					hold
				}) => (
					<tr>
						<td>
							<a href={`#${getSegmentAnchor(name)}`}>
								{name}
							</a>
						</td>
						<td>{rate}</td>
						<td>{temp}</td>
						<td>{hold}</td>
					</tr>
				))}
			</tbody>
		</table>

		<ol>
			{ getBurnoutSteps(segments).map(({
				heading,
				action,
				temp,
				middle,
				time,
				units
			}) => (
				<li>
					<a href={`#${getSegmentAnchor(heading)}`}>
						{action}
						<span> {temp}</span>&deg;
						{` ${middle} `}
						<span> {time} </span>
						{units}
					</a>
				</li>
			))}
		</ol>
	</section>
);

export default Steps;
