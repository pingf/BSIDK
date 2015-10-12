var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        webpack:['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server' ],
        app: ["./components/app"],
        button: ["./components/button"],
        react: ['react']
    },
    output: {
        // path: "bundle",
        // filename: "[name].js",
        // // chunkFilename: "[id].chunk.js",
        // publicPath: '/static/'

        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
                name: 'react',
                filename:"react.js",
                chunks:['button','react'],
        }),

        new webpack.optimize.CommonsChunkPlugin({
                name: "button",
                filename:"button.js",
                chunks:['app','button'],
        })
    ],
    module: {
        loaders: [
            {
                test: /.js?$/,
                loaders: ['react-hot','babel-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'components')

            }
        ]
    },
};
