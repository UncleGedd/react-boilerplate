const webpack = require('./webpack.test.config');

module.exports = function (config) {
    config.set({
        basePath: '',
        browsers: ['ChromeHeadlessNoSandbox'],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            },
        },
        frameworks: ['mocha', 'viewport'],
        files: [
            'spec/index_test.js',
        ],
        preprocessors: {
            'spec/index_test.js': ['webpack', 'sourcemap'] // *.tsx for React Jsx
        },
        webpack: {...webpack, mode: 'development'},
        webpackServer: {
            noInfo: true
        },
        reporters: ['nyan'],
        nyanReporter: {
            suppressErrorHighlighting: true,
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_WARN,
        autoWatch: true,
        usePolling: true,
        singleRun: false,
    });
};
