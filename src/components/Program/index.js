import { h } from 'preact';
import classNames from 'obj-str';
import Segments from '../Segments';
import Steps from '../Steps';
import style from './style';

/**
 * Burnout program tabs
 * @param {object} segments - The burnout segments.
 * @returns {JSX.Element} - A stateless component.
 */
const Program = ({ segments }) => (
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
		/>
		<label for="steps">
			steps
		</label>

		<section class={style.tabPages}>
			<Segments segments={segments} />
			<Steps segments={segments} />
		</section>
	</section>
);

export default Program;
