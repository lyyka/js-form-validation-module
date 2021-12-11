import path from 'path';

export default {
    mode: 'production',
    entry: './src/jsFormValidation.js',
    output: {
        filename: 'index.js',
        path: path.resolve(path.resolve(), 'dist'),
        library: 'jsFormValidation',
        libraryTarget: 'commonjs2'
    },
};