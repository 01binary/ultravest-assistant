import { h } from 'preact';
import Segment from '../Segment';
import style from './style';

/**
 * Burnout diagram.
 * @param {object[]} segments - The program segments.
 * @returns {JSX.Element} - A stateless component.
 */
const Diagram = ({ segments }) => (
	<section class={style.diagram}>
		{ segments.map((segment, index) => (
			<Segment
				{...segment}
				prev={segments[index - 1]}
			/>
		))}
	</section>
);

export default Diagram;
