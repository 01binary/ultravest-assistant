import changeCase from 'change-case';

/**
 * Get segment name as a URL parameter.
 * @param {string} name - The segment name.
 * @returns {string} - The segment name as a URL parameter.
 */
export default name => (
	changeCase.paramCase(name)
);
