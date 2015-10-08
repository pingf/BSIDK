var webpack = require('webpack');
module.exports = {
    entry: {
        app: ["./components/app"],
        button: ["./components/button"],
        react: ['react'],
    },
    output: {
        path: "bundle",
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"

    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //         name: "reactStyle",
        //         filename:"react-style.js",
        //         chunks:['button','reactStyle'],
        // }),
        new webpack.optimize.CommonsChunkPlugin({
                name: 'react',
                filename:"react.js",
                chunks:['app','button','react'],
        }),

        new webpack.optimize.CommonsChunkPlugin({
                name: "button",
                filename:"button.js",
                chunks:['app','button'],
        }),
    ],
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
};
