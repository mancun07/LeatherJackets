const currentTask = process.env.npm_lifecycle_event;
// const {HTMLWebpackPlugin} = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const config = {
    entry: './app/scripts/app.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        contentBase: path.join(__dirname, '/app'),
        hot: true
        // host: '0.0.0.0'
    },
    mode: 'development',
    plugins: [],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    }
}


if (currentTask == 'build') {
    config.output = {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'dist')
    },

    config.mode = 'production',
    config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
    config.plugins.push(new MiniCssExtractPlugin({filename: 'main.css'}))
  
}



module.exports = config;