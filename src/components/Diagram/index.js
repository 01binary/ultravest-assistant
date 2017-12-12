import { h } from 'preact';
import Segment from '../Segment';
import getSegmentOffset from '../../selectors/getSegmentOffset';
import style from './style';

/**
 * Burnout diagram
 * @param {object[]} segments - The program segments.
 * @param {number} maxIndex - The index of the segment with the highest temperature.
 * @returns {JSX.Element} - A stateless component.
 */
const Diagram = ({
	segments,
	maxIndex }) => (
	<section class={style.diagram}>
		{ segments.map((segment, index) => (
			<Segment
				{...segment}
				prev={segments[index - 1]}
				offset={getSegmentOffset(index, maxIndex, segments)}
			/>
		))}
	</section>
);

export default Diagram;
