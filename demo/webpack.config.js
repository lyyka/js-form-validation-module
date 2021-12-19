const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        indexPage: './src/js/indexPage.js',
        demoPage: './src/js/demoPage.js',
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(path.resolve(), 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: false,
            inject: 'body',
            chunks: ['indexPage'],
        }),
        
        new HtmlWebpackPlugin({
            filename: 'pages/demo.html',
            template: './pages/demo.html',
            minify: false,
            inject: 'body',
            chunks: ['demoPage'],
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),

        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.scss$/,
    //             use: [
    //                 'style-loader', // 3. Injects styles into DOM
    //                 'css-loader', // 2. Turn CSS into commonjs
    //                 'sass-loader' // 1. Turns SCSS into CSS
    //             ]
    //         }
    //     ],
    // },
    
    resolve: {
        alias: {
            '@': path.resolve(path.resolve(), './src/js'),
            '~': path.resolve(path.resolve(), './src/scss'),
        }
    },
};