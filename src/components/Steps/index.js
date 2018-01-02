import { h } from 'preact';
import getBurnoutSteps from '../../selectors/getBurnoutSteps';
import getSegmentAnchor from '../../selectors/getSegmentAnchor';
import { VIEWS } from '../../enhancers/withView';

/**
 * Program steps
 * @param {object[]} segments - The program segments.
  * @param {string} view - The current view provided by withView.
 * @returns {JSX.Element} - A stateless component.
 */
const Steps = ({ segments, view }) => (
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
				<a
					href={`#${getSegmentAnchor(heading)}`}
					tabIndex={view === VIEWS.STEPS ? 0 : -1}
				>
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
