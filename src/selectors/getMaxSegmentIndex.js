/**
 * Get index of a segment with the highest temperature.
 * @param {object[]} segments - The array of segments.
 * @returns {number} - The index of a segment with the highest temperature.
 */
export default segments => segments.reduce(
	(max, segment, index) => (
		segment.temp > max.temp ? { ...segment, index } : max
	), { temp: 0, index: 0 }
).index;
