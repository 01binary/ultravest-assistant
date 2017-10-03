import { h } from 'preact';
import getBurnoutSteps from '../../selectors/getBurnoutSteps';
import './style';

/**
 * Burnout steps.
 * @param {object} segments - The burnout preset.
 * @returns {JSX.Element} - A stateless component.
 */
const Steps = ({ segments }) => (
	<ol>
		{ getBurnoutSteps(segments).map(step => (
			<li>
				{step.action}
				{' '}
				<span>{step.temp}</span>&deg;
				{' '}
				{step.middle}
				{' '}
				<span>{step.time}</span>
				{' '}
				{step.units}
			</li>
		))}
	</ol>
);

export default Steps;
