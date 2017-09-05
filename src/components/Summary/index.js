import style from './style';
import getBurnoutSummary from '../../lib/getBurnoutSummary';

/**
 * The summary of user selections.
 * @param {object} props.flask - The flask parameters.
 * @param {object} props.investment - The investment parameters.
 * @returns {JSX.Element} - A React stateless component.
 */
const Summary = (props) => (
	<section class={style.summary}>
		<h3>Summary</h3>

		<dl>
			<dt>Flask</dt>
			<dd>{props.flask.height} X {props.flask.height} in</dd>

			<dt>Investment</dt>
			<dd>{props.investment.preset} W:P</dd>

			<dt>Burnout</dt>
			<dd>{getBurnoutSummary(props)}</dd>
		</dl>
	</section>
);

export default Summary;
