import { h } from 'preact';
import classNames from 'obj-str';
import getBurnoutTime from '../../selectors/getBurnoutTime';
import getMaxSegmentIndex from '../../selectors/getMaxSegmentIndex';
import withBurnoutOrQuery from '../../enhancers/withBurnoutOrQuery';
import Diagram from '../Diagram';
import Program from '../Program';
import timelineStyle from '../App/style/timeline';
import formStyle from '../App/style/forms';
import calcStyle from '../App/style/calc';
import style from './style';

/**
 * Display burnout preset calculated from flask size
 * @param {string} view - The current view (segments or steps) provided by withView.
 * @param {Object} schedule - The burnout schedule provided by withBurnoutOrQuery.
 * @param {function} handleViewChange - The change handler provided by withView.
 * @returns {JSX.Element} - A stateless component.
 */
export const Burnout = ({
	view,
	schedule,
	handleViewChange }) => (
	<article class={classNames({
		[timelineStyle.timeline]: true,
		[style.burnout]: true
	})}
	>
		<h2>burnout</h2>

		<output class={classNames({
			[formStyle.group]: true,
			[calcStyle.calc]: true
		})}
		>
			<dl class={formStyle.control}>
				<dt>time</dt>
				<dd>
					{getBurnoutTime(schedule)}
					<span>hours</span>
				</dd>
			</dl>
		</output>

		<Program
			segments={schedule}
			view={view}
			handleViewChange={handleViewChange}
		/>

		<Diagram
			segments={schedule}
			maxIndex={getMaxSegmentIndex(schedule)}
		/>
	</article>
);

export default withBurnoutOrQuery(Burnout);
