import getEventId from '../../src/selectors/getEventId';

describe('selector getEventId', () => {

	it('gets event target id', () => {
		expect(getEventId({
			target: {
				id: 'testing'
			}
		})).toBe('testing');
	});
});
