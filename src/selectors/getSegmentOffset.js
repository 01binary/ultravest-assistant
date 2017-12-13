/**
 * Get segment offset multiplier (how many times to indent visually).
 * @param {number} currentIndex - The index of a segment for which to get the offset.
 * @param {number} maxIndex - The index of the segment with the highest temperature.
 * @returns {number} - The segment offset multiplier.
 */
export default (currentIndex, maxIndex, all) => (
	maxIndex > currentIndex ?
		getOffsetBefore(currentIndex, maxIndex, all) :
		getOffsetAfter(currentIndex, maxIndex, all)
);

const getOffsetBefore = (currentIndex, maxIndex, all) => all
	.slice(currentIndex, maxIndex)
	.reduce((offset, segment, index, segments) => (
		offset + (getIsPrevLower(index, segment, segments) ? 1 : -1)
	), 0);

const getOffsetAfter = (currentIndex, maxIndex, all) => all
	.slice(maxIndex + 1, currentIndex)
	.reduce((offset, segment, index, segments) => (
		offset + (getIsNextHigher(index, segment, segments) ? -1 : 1)
	), 0);

const getIsNextHigher = (index, segment, segments) => (
	index + 1 < segments.length &&
	segments[index + 1].temp > segment.temp
);

const getIsPrevLower = (index, segment, segments) => (
	index === 0 ||
	segments[index - 1].temp < segment.temp
);
