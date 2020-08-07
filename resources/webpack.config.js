const webpack = require('webpack');
const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: [path.resolve(__dirname, 'ts/index.ts')]
  },
  output: {
    path: path.resolve(__dirname, '../public/js'),
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          // node_modules配下のモジュールをバンドル対象とする
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            // drop_console: true,
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['*', '.ts', '.js', '.vue', '.json']
  },
  plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: 'development' })]
};
