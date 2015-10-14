var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: {
        button: ['./src/components/button'],
        button0: ['./src/components/button0'],
        index:'./src/index',
        reacts: ['react']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
                "button.js",
                ['button','index']
        ),

        new webpack.optimize.CommonsChunkPlugin(
                "button0.js",
                ['button0','index']
        ),
         new webpack.optimize.CommonsChunkPlugin(
                 "reacts.js",
                 ['button.js','reacts']
         ),
         new webpack.optimize.CommonsChunkPlugin(
                 "reacts.js",
                 ['button0.js','reacts']
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
