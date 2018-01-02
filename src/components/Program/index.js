import { h } from 'preact';
import classNames from 'obj-str';
import Segments from '../Segments';
import Steps from '../Steps';
import { VIEWS } from '../../enhancers/withView';
import style from './style';

/**
 * Burnout program tabs
 * @param {object} segments - The burnout segments.
 * @param {string} view - The current view (segments or steps) provided by withView.
 * @param {function} handleViewChange - The view change handler provided by withView.
 * @returns {JSX.Element} - A stateless component.
 */
const Program = ({
	segments,
	view,
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
			checked={view === VIEWS.SEGMENTS}
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
			checked={view === VIEWS.STEPS}
			onChange={handleViewChange}
		/>
		<label for="steps">
			steps
		</label>

		<section class={style.tabPages}>
			<Segments segments={segments} view={view} />
			<Steps segments={segments} view={view} />
		</section>
	</section>
);

export default Program;
