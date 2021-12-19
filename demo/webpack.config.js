const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        indexPage: './src/js/index.js',
        demoPage: './src/js/demoPage.js',
        docsPage: './src/js/docsPage.js',
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

        // To add more html pages to build, just add new instance of HtmlWebpakcPlugin to this array

        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 3. Injects styles into DOM
                    'css-loader', // 2. Turn CSS into commonjs
                    'sass-loader' // 1. Turns SCSS into CSS
                ]
            }
        ],
    }
};