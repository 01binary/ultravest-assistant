/**
 * Get flask volume (the volume of a right cylinder).
 * @param {object} flask - The flask diameter and height.
 * @returns {number} - The flask volume.
 */
export default ({ flask }) => (
	// π
	Math.PI *
	// r²
	Math.pow(flask.diameter / 2, 2) *
	// h
	flask.height
);
