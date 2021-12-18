const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        indexPage: './src/js/index.js',
        demoPage: './src/js/demoPage.js',
        docsPage: './src/js/docsPage.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(path.resolve(), 'dist'),
    },
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