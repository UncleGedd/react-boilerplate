const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    resolve: {
        extensions: ['.tsx', '.ts', '.mjs', '.js']
    },

    entry: {
        main: './index.tsx',
    },

    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: [/node_modules/, /\*.spec*/],
        }, {
            test: [/\.scss$/, /\.css$/],
            use: [{
                loader: 'style-loader' // creates style nodes from JS strings
            }, {
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
            }],
        }, {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Boilerplate',
        }),
    ],
};