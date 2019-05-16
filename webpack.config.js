/* eslint-disable require-unicode-regexp */
/* eslint-disable strict */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    'devServer': {
        'contentBase': './dist',
        'port': 8000,
        'proxy': {
            '/': {
                'target': 'http://localhost:8080'
            }
        }
    },
    'devtool': 'inline-source-map',
    'entry': './src/js/index.js',
    'mode': 'development',
    'module': {
        'rules': [
            {
                'test': /\.css$/,
                'use': [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                // eslint-disable-next-line prefer-named-capture-group
                'test': /\.(png|svg|jpg|gif)$/,
                'use': ['file-loader']
            },
            {
                'loader': 'handlebars-loader',
                'test': /\.handlebars$/
            },
            {
                // eslint-disable-next-line prefer-named-capture-group
                'exclude': /(node_modules)/,
                'test': /\.js$/,
                'use': {
                    'loader': 'babel-loader',
                    'options': {
                        'presets': [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                'test': /\.scss$/,
                'use': [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                'enforce': 'pre',
                'exclude': /node_modules/,
                'loader': 'eslint-loader',
                'test': /\.js$/
            },
            {
                'exclude': /node_modules/,
                'test': /\.tsx?$/,
                'use': 'ts-loader'
            }
        ]
    },
    'output': {
        'filename': 'bundle.js',
        'path': path.resolve(__dirname, 'dist')
    },
    'plugins': [
        // Array of plugins to apply to build chunk
        new HtmlWebpackPlugin({
            'inject': 'body',
            'template': `${__dirname}/src/public/index.html`
        })
    ]
};
