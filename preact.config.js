const ts = require('preact-cli-plugin-typescript');
const path = require('path');

export default config => {
	config.module.loaders.push({
		test: /\.scss$/,
		include: path.join(__dirname, './src'),
		use: [
			'style-loader',
			{
				loader: 'typings-for-css-modules-loader',
				options: {
					modules: true,
					namedExport: true
				}
			}
		]
	});

	ts(config);
};
