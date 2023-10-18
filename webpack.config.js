const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: './src/background.js',
    popup: './src/popup.js', // Entry point for your popup script
    content: './src/content.js', // Entry point for your content script
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    // Copy necessary non-JavaScript files to the build directory
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/manifest.json', to: 'manifest.json' },
        { from: './src/popup.html', to: 'popup.html' },
        { from: './src/icon.png', to: 'icon.png' },
        // Add more patterns for other files as needed
      ],
    }),
  ],
};
