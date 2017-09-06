const getDefaultPresetName = require('../../src/lib/getDefaultPresetName');

test('returns the first sub-object with default property set', () => {
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
	})).toBe('two');
});

test('returns undefined if a default preset could not be found', () => {
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
	})).toBe(undefined);
});
