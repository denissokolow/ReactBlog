
export default {
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: './pub/main.js' /* 106 KiB */
    
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      query: {
        babelrc: false,
        presets: [
          'react', ['env', {
            modules: false,
          }],
        ],
      },
    }],
  },
};