const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        filename: 'index.js',
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