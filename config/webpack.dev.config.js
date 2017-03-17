var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var paths = require('./paths')

module.exports = {
    entry: {
        app: paths.appSource,
        vendor: ["react", "react-dom", "react-router", "buffer"]
    },
    output: {
        path: '/',
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    devtool: "source-map",

    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    
    module: {
            loaders: [
                { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
                { test: /\.s?css$/, use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'] },
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: ["vendor"]
            }
            ),
            new HtmlWebpackPlugin({
                chunks: ['vendor', 'app'],
                template: paths.templateSource
            })
        ]
}
