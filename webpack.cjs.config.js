const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: './index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack.cjs.js',
        // libraryTarget: 'commonjs2',
    },
    plugins: [
        // new BundleAnalyzerPlugin()
    ]
};