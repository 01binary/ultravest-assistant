import getFlaskOrQuery from '../../src/selectors/getFlaskOrQuery';
import { CUSTOM } from '../../src/enhancers/withFlask';

describe('selector getFlaskOrQuery', () => {

	it('with no query', () => {
		expect(getFlaskOrQuery(state, {})).toEqual(state);
	});

	it('with query override existing preset', () => {
		expect(getFlaskOrQuery(state, query)).toEqual({
			preset: query.preset,
			diameter: state.diameter,
			height: state.height
		});
	});

	it('with query override custom preset', () => {
		expect(getFlaskOrQuery(state, queryWithCustom)).toEqual(queryWithCustom);
	});

	const state = {
		preset: 'preset from state',
		diameter: 111,
		height: 222
	};

	const query = {
		preset: 'preset from query',
		diameter: 555,
		height: 666
	};

	const queryWithCustom = {
		preset: CUSTOM,
		diameter: 888,
		height: 999
	};
});
