var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: ['./src/index','./src/components/left_nav_trigger'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel" }
        ]
    }
};
