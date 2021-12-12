const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(path.resolve(), 'dist'),
        library: {
            type: 'module',
        }
    },
    experiments: {
        outputModule: true,
    },
};