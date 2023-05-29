const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
       "main":'./ts/main.ts',
    },
    devtool: process.env.NODE_ENV === 'production' ? 'source-map': 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html'
        }),
      ],
};
