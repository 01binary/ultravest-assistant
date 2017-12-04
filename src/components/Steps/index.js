import { h } from 'preact';
import classNames from 'obj-str';
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
			class={classNames({
				[style.tab]: true,
				[style.segmentsTab]: true
			})}
			type="radio"
			name="view"
			id="segments"
			value="segments"
			checked={showSegments}
			onChange={toggleSegmentView}
		/>
		<label for="segments">
			segments
		</label>

		<input
			class={classNames({
				[style.tab]: true,
				[style.stepsTab]: true
			})}
			type="radio"
			name="view"
			id="steps"
			value="steps"
			checked={!showSegments}
			onChange={toggleSegmentView}
		/>
		<label for="steps">
			steps
		</label>

		<section class={style.tabPages}>
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
	</section>
);

export default Steps;
