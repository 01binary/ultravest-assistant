/**
 * Get flask volume (the volume of a right cylinder).
 * @param {object} flask - The flask diameter and height.
 * @returns {number} - The flask volume.
 */
export default ({ diameter, height }) => (
	// π
	Math.PI *
	// r²
	Math.pow(diameter / 2, 2) *
	// h
	height
);
