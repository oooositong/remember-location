const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: './index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack.umd.js',
        libraryTarget: 'umd',
        library: 'RememberLocation',
        libraryExport: 'default'
    },
    plugins: [
        // new BundleAnalyzerPlugin()
    ]
};