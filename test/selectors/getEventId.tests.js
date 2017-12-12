import getEventId from '../../src/selectors/getEventId';

describe('selector getEventId', () => {

	test('gets event target id', () => {
		expect(getEventId({
			target: {
				id: 'testing'
			}
		})).toBe('testing');
	});
});
