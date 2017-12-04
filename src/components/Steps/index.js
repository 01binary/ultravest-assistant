import { h } from 'preact';
import getBurnoutSteps from '../../selectors/getBurnoutSteps';
import getSegmentAnchor from '../../selectors/getSegmentAnchor';

/**
 * Program steps
 * @param {object[]} segments - The program segments.
 * @returns {JSX.Element} - A stateless component.
 */
const Steps = ({ segments }) => (
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
);

export default Steps;
