import { h } from 'preact';
import classNames from 'obj-str';
import style from './style';

/**
 * Burnout diagram segment.
 * @param {Object} prev - The previous segment.
 * @param {Object} cur - The current segment.
 */
const Segment = ({ prev, cur }) => (
	<article class={getSegmentClass(prev, cur)}>
		<figure class={style.temperature}>
			<svg />

			<figcaption>
				<h3>temp</h3>
				{ prev ?
					`${cur.temp}°` : 'ambient'
				}
				{ prev &&
					<span class={style.units}>F</span>
				}
			</figcaption>
		</figure>

		<figure class={style.rate}>
			<svg />

			<figcaption>
				<h3>rate</h3>
				{ `${cur.rate}°` }
				<span class={style.units}>F/hr</span>
			</figcaption>
		</figure>

		<figure class={style.time}>
			<svg />

			<figcaption>
				<h3>hold</h3>
				{ cur.hold }
				<span class={style.units}>
					{ cur.hold > 1 ? 'hours' : 'hour' }
				</span>
			</figcaption>
		</figure>
	</article>
);

const getSegmentClass = (prev, cur) => classNames({
	[style.segment]: true,
	[style.raise]: prev ? cur.temp > prev.temp : true,
	[style.lower]: prev ? cur.temp < prev.temp : false
});

export default Segment;
