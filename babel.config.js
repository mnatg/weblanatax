const presets = []
const plugins = []

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.json'],
    alias: {
      'main': './',
    },
  },
])

module.exports = {
  presets,
  plugins,
}
