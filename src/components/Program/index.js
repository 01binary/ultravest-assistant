import { h } from 'preact';
import classNames from 'obj-str';
import Segments from '../Segments';
import Steps from '../Steps';
import { VIEWS } from '../../enhancers/withView';
import style from './style';

/**
 * Burnout program tabs
 * @param {Object} props - The props provided by withBurnoutOrQuery.
 * @param {function} handleViewChange - The view change handler provided by withBurnout.
 * @returns {JSX.Element} - A stateless component.
 */
const Program = ({
	...props,
	handleViewChange }) => (
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
			checked={props.view === VIEWS.SEGMENTS}
			onChange={handleViewChange}
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
			checked={props.view === VIEWS.STEPS}
			onChange={handleViewChange}
		/>
		<label for="steps">
			steps
		</label>

		<section class={style.tabPages}>
			<Segments {...props} />
			<Steps {...props} />
		</section>
	</section>
);

export default Program;
