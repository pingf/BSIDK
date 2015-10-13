var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: {
        button: ['./src/components/button'],
        button0: ['./src/components/button0'],
        index:'./src/index'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
                "button0.js",
                ['button0.js','index']  //should be button0.js not button0, otherwise error will show
        ),
        new webpack.optimize.CommonsChunkPlugin(
                "button.js",
                ['button.js','index']
        ),
        new webpack.optimize.CommonsChunkPlugin(
                "react-common.js",
                ['button.js','button0.js','index']
        ),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }]
    }
};
