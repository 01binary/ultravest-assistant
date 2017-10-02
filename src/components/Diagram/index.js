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
		<a href="#">
			&larr;
			<span>Previous Step</span>
		</a>

		<a href="#">
			<span>Next Step</span>
			&rarr;
		</a>

		{ segments.map((segment, index) => (
			<Segment
				prev={segments[index - 1]}
				cur={segment}
			/>
		))}
	</section>
);

export default Diagram;