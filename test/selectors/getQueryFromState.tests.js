import getQueryFromState from '../../src/selectors/getQueryFromState';

describe('selector getQueryFromState', () => {

	test('deflates state', () => {
		expect(getQueryFromState({
			myobject: {
				propertyOne: 'hello',
				propertyTwo: 'world'
			},
			notobject: 'testing'
		})).toEqual({
			'myobject-propertyOne': 'hello',
			'myobject-propertyTwo': 'world',
			notobject: 'testing'
		});
	});
});
