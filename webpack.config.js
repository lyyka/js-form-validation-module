const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/jsFormValidation.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'jsFormValidation',
        libraryTarget: 'commonjs2'
    },
}