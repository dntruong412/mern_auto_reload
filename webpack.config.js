const path = require('path');
const webpack = require('webpack');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'assets'),
    entry: {
        script: ['./script.js', hotMiddlewareScript],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: "/public/",
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};