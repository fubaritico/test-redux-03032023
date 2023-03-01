const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Types': path.resolve(__dirname, 'src/types'),
      '@Hooks': path.resolve(__dirname, 'src/hooks'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
      '@Redux': path.resolve(__dirname, 'src/redux'),
      '@Svg': path.resolve(__dirname, 'src/svg'),
    },
  },
}
