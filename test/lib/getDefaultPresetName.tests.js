const expect = require('chai').expect;
const getDefaultPresetName = require('../../src/lib/getDefaultPresetName');

describe('getDefaultPresetName', () => {

	it('returns the first sub-object with default property set', () => {
		expect(getDefaultPresetName({
			// has default false
			one: {
				default: false
			},
			// has default true (should be chosen)
			two: {
				default: true
			},
			// has default undefined
			three: {
			}
		})).to.equal('two');
	});
	
	it('returns undefined if a default preset could not be found', () => {
		expect(getDefaultPresetName({
			// has default false
			one: {
				default: false
			},
			// has default true (should be chosen)
			two: {
			},
			// has default undefined
			three: {
			}
		})).to.equal(undefined);
	});
});
