import { h } from 'preact';
import classNames from 'obj-str';
import getSegmentAnchor from '../../selectors/getSegmentAnchor';
import style from './style';

/**
 * Burnout diagram segment.
 * @param {string} name - The segment name.
 * @param {number} rate - The segment rate (F per hour).
 * @param {number} temp - The segment temperature (F).
 * @param {number} hold - The segment hold time (hours).
 * @param {Object} prev - The previous segment.
 */
const Segment = ({
	name,
	offset,
	rate,
	temp,
	hold,
	prev }) => (
	<a name={getSegmentAnchor(name)} class={style.segment}>
		<article
			class={getSegmentClass(prev && prev.temp, temp)}
			style={{
				marginTop: 44 + offset * 44
			}}
		>
			<figure class={style.temperature}>
				<figcaption>
					<h3>temp</h3>
					{ prev ?
						`${temp}°` : 'ambient'
					}
					{ prev &&
						<span class={style.units}>F</span>
					}
				</figcaption>
			</figure>

			<figure class={style.rate}>
				<figcaption>
					<h3>rate</h3>
					{ `${rate}°` }
					<span class={style.units}>F/hr</span>
				</figcaption>
			</figure>

			<figure class={style.time}>
				<figcaption>
					<h3>hold</h3>
					{hold}
					<span class={style.units}>
						{hold > 1 ? ' hours' : ' hour'}
					</span>
				</figcaption>
			</figure>
		</article>
	</a>
);

const getSegmentClass = (prevTemp, temp) => classNames({
	[style.raise]: prevTemp ? temp > prevTemp : true,
	[style.lower]: prevTemp ? temp < prevTemp : false
});

export default Segment;
