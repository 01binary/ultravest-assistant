import { h } from 'preact';
import classNames from 'obj-str';
import presets from '../../config/burnoutPresets';
import getBurnoutPreset from '../../selectors/getBurnoutPreset';
import getBurnoutTime from '../../selectors/getBurnoutTime';
import getMaxSegmentIndex from '../../selectors/getMaxSegmentIndex';
import Diagram from '../Diagram';
import Program from '../Program';
import timelineStyle from '../App/style/timeline';
import formStyle from '../App/style/forms';
import calcStyle from '../App/style/calc';
import style from './style';

/**
 * Display burnout preset calculated from flask size
 * @param {object} flask - The flask props.
 * @param {string} view - The current view (segments or steps).
 * @param {function} handleViewChange - The view change handler.
 * @returns {JSX.Element} - A stateless component.
 */
const Burnout = ({
	flask,
	view,
	handleViewChange }) => {
	const preset = getBurnoutPreset(presets, flask);
	return (
		<article class={classNames({
			[timelineStyle.timeline]: true,
			[style.burnout]: true
		})}
		>
			<h2>burnout</h2>

			<output class={classNames({
				[formStyle.group]: true,
				[calcStyle.calc]: true
			})}
			>
				<dl class={formStyle.control}>
					<dt>time</dt>
					<dd>
						{getBurnoutTime(preset)}
						<span>hours</span>
					</dd>
				</dl>
			</output>

			<Program
				segments={preset.segments}
				view={view}
				handleViewChange={handleViewChange}
			/>

			<Diagram
				segments={preset.segments}
				maxIndex={getMaxSegmentIndex(preset.segments)}
			/>
		</article>
	);
};

export default Burnout;
