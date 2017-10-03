import { h } from 'preact';
import getBurnoutSteps from '../../selectors/getBurnoutSteps';
import style from './style';

/**
 * Burnout steps.
 * @param {object} segments - The burnout segments.
 * @param {bool} showSegments - Whether to show segments or steps.
 * @param {func} toggleSegmentView - Toggle between segment and step view.
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
			name="program-view"
			id="steps"
			checked={!showSegments}
			onChange={toggleSegmentView}
		/>
		<label for="steps">steps</label>

		<input
			type="radio"
			name="program-view"
			id="segments"
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
				{ segments.map(segment => (
					<tr>
						<td>{segment.name}</td>
						<td>{segment.rate}</td>
						<td>{segment.temp}</td>
						<td>{segment.hold}</td>
					</tr>
				))}
			</tbody>
		</table>

		<ol>
			{ getBurnoutSteps(segments).map(step => (
				<li>
					{step.action}
					<span> {step.temp}</span>&deg;
					{' '}
					{step.middle}
					{' '}
					<span> {step.time} </span>
					{step.units}
				</li>
			))}
		</ol>
	</section>
);

export default Steps;
