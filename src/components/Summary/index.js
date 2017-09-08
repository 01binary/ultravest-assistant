import { h } from 'preact';
//import style from './style';
import getBurnoutSummary from '../../selectors/getBurnoutSummary';

let style = { flask: undefined };

/**
 * The summary of user selections.
 * @param {object} props.flask - The flask parameters.
 * @param {object} props.investment - The investment parameters.
 * @returns {JSX.Element} - A React stateless component.
 */
const Summary = (props) => null; /* (
	<section class={style.summary}>
		<h3>Summary</h3>

		<dl>
			<dt>Flask</dt>
			<dd>{props.flask.diameter} X {props.flask.height} in</dd>

			<dt>Investment</dt>
			<dd>{props.investment.preset} W:P</dd>

			<dt>Burnout</dt>
			<dd>{getBurnoutSummary(props)}</dd>
		</dl>
	</section>
);*/

export default Summary;
