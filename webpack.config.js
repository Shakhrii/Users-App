const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

module.exports = (argv) => {
  const isDev = argv.mode === 'development';

  return {
    cache: {
      type: 'filesystem',
    },
    
    entry: './src/index.tsx',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
      clean: true,
    },

    mode: argv.mode || 'development',

    devtool: isDev ? 'eval-source-map' : 'source-map',

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        eslintPath: 'eslint/use-at-your-own-risk',
      }),
    ],

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@app': path.resolve(__dirname, 'src/app'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@widgets': path.resolve(__dirname, 'src/widgets'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@entities': path.resolve(__dirname, 'src/entities'),
        '@shared': path.resolve(__dirname, 'src/shared'),
      },
    },

    devServer: {
      historyApiFallback: true,
      liveReload: true,
      watchFiles: ['src/**/*'],
      port: 3000,
      open: true,
      hot: true,
    },

    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: /node_modules/,
    },
  };
};
