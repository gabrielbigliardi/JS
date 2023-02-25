const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    // devServer: {
    //     contentBase: './dist',
    //     port: 9000,
    // },
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             cache: true,
    //             parallel: true,
    //             sourceMap: true
    //         }),
    //         new OptimizeCSSAssetsPlugin({})
    //     ]
    // },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/dist')
    },
    plugins: [
        // new MiniCssExtractPlugin({ filename: 'estilo.css' }),
        new MiniCssExtractPlugin({ filename: 'estilo.css' }),
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/*.html', to: '/dist' },
                { from: './src/imgs', to: 'imgs' }
            ]
        })
    ],

    // [
    //     { from: 'src/', to: '**/*.html' },
    //     { from: 'src/', to: 'imgs/**/*' }
    // ])
    module: {
        rules: [{
            // test: /\.s?[ac]ss$/,
            test: /\.s?[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader, // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /.(ttf|otf|eot|svg|woff(2)?)$/,
            use: ['file-loader']
        }, {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    }
}

