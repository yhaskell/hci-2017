var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var paths = require('./paths')

module.exports = {
    entry: {
        app: paths.appSource,
        vendor: [ "react", "react-dom", "react-router" ]
    },
    output: {
        path: paths.distributionPath,
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },

    devtool: false,
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract([ 'css-loader', 'postcss-loader' ])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"]
        }
        ),
        new webpack.optimize.UglifyJsPlugin({ comments: false }),
        new HtmlWebpackPlugin({
            chunks: ['vendor', 'app'],
            template: paths.templateSource
        }),
    ]
}
