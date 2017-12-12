import getStateFromQuery from '../../src/selectors/getStateFromQuery';

describe('selector getStateFromQuery', () => {

	test('inflates state', () => {
		expect(getStateFromQuery({
			'myobject-propertyOne': 'hello',
			'myobject-propertyTwo': 'world',
			notobject: 'testing'
		})).toEqual({
			myobject: {
				propertyOne: 'hello',
				propertyTwo: 'world'
			},
			notobject: 'testing'
		});
	});
});
