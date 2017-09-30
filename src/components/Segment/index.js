import { h } from 'preact';
import style from './style';

/**
 * Burnout diagram segment.
 * @param {Object} prev - The previous segment.
 * @param {Object} cur - The current segment.
 */
const BurnoutSegment = ({ prev, cur }) => (
	<section class={[
		style.segment,
		cur.temp > prev.temp ?
			style.segmentRaise :
			style.segmentLower]}
	>
		<article class={style.temperature}>
			<h3>temp</h3>
			{ prev ? 'ambient' : `${cur.temp}°` }
			<span class={style.units}>F</span>
		</article>

		<article class={style.rate}>
			<h3>rate</h3>
			{ `${cur.rate}°` }
			<span class={style.units}>F/hr</span>
		</article>

		<article class={style.time}>
			<h3>hold</h3>
			{ cur.hold }
			<span class={style.units}>hours</span>
		</article>
	</section>
);

export default BurnoutSegment;
