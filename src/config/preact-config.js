const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/**
 * Enhance preact-cli webpack config.
 * @param {object} config - The original webpack config.
 */
export default config =>
	config.plugins.push(new BundleAnalyzerPlugin({
		analyzerMode: 'static',
		reportFilename: './bundleAnalyze.html',
		openAnalyzer: false
	}));
