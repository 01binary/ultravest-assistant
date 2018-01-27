import { h } from 'preact';
import getBurnoutSteps from '../../selectors/getBurnoutSteps';
import getSegmentAnchor from '../../selectors/getSegmentAnchor';
import { VIEWS } from '../../enhancers/withView';

/**
 * Program steps
 * @param {Object[]} segments - The program segments provided by Program.
  * @param {string} view - The current view provided by Program.
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
