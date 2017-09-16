import { h } from 'preact';
import style from './style';
import getBurnoutSummary from '../../selectors/getBurnoutSummary';

/**
 * The summary of user selections.
 * @param {object} props.flask - The flask parameters.
 * @param {object} props.investment - The investment parameters.
 * @returns {JSX.Element} - A React stateless component.
 */
const Summary = ({ flask, investment }) => (
	<section class={style.summary}>
		<h3>Summary</h3>

		<dl>
			<dt>Flask</dt>
			<dd>{flask.diameter} X {flask.height} in</dd>

			<dt>Investment</dt>
			<dd>{investment.preset} W:P</dd>

			<dt>Burnout</dt>
			<dd>{getBurnoutSummary(flask)}</dd>
		</dl>
	</section>
);

export default Summary;
