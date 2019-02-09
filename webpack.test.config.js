const webpack = require('./webpack.common.config');
const path = require('path');

module.exports = {
    ...webpack,
    devtool: 'inline-source-map',
    entry: {
        test_entry: '../spec/index_test'
    },
    output: {
        path: path.resolve('./out'),
        filename: '[name].js'
    },
};
