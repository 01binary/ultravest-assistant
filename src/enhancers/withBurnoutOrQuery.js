import { mapProps } from 'recompose';
import { mergeWith, defaultTo, propOr } from 'ramda';
import getBurnoutSchedule from '../selectors/getBurnoutSchedule';
import presets from '../config/burnoutPresets';

/**
 * Select burnout props.
 * @param {Object} query - The state provided by withQuery.
 * @param {Object} flask - The state provided by withFlask.
 * @param {string} view - The state provided by withView.
 * @param {function} handleViewChange - The handler provided by withView.
 * @returns {Object} - The burnout props.
 */
export default mapProps(({
	query,
	flask,
	view,
	handleViewChange
}) => ({
	handleViewChange,
	view: query.view || view,
	schedule: getBurnoutSchedule(
		presets,
		mergeWith(defaultTo, flask, getQueryFlask(query))
	)
}));

const getQueryFlask = propOr({}, 'flask');