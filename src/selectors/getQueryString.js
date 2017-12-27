/**
 * Get window query string
 * @returns {Object} A window location if code is executing client-side, or empty query string if not.
 */
export default () => (
	global.window ?
		global.window.location :
		{ search: '' }
);
