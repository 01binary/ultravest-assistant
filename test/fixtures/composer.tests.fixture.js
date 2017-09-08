import { expect } from 'chai';
import reflect from './reflector.tests.fixture';

export default (composition, composer) => {
	const props = reflect(composition).props;

	Object.keys(reflect(composer).props)
		.filter(prop => prop !== 'children')
		.map(prop => {
			expect(props).to.have.property(prop);
		});
};
