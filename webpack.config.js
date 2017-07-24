var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var phaserModule = path.join(__dirname, '/node_modules/phaser/')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

module.exports = {
    entry: {
        bundle: './src/index.js',
        weather: './src/weather.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
            { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
            { test: /p2\.js/, use: ['expose-loader?p2'] },
            {
               use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpg|png|gif|jpeg|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 100000,
                        name: 'image/[hash].[ext]'
                    }
                }
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',            
            minChunks: function(module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }            
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            chunks: ['vendor', 'bundle']
        }),
        new HtmlWebpackPlugin({
            template: 'src/weather.html',
            filename: 'weather.html',
            chunks: ['vendor', 'weather']
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css'
        })
    ],
    resolve: {
        alias: {
            'phaser': phaser,
            'pixi': pixi,
            'p2': p2
        }
    }
}