module.exports = function(api) {
  api.cache(true)
  const presets = [
    '@babel/react',
    [
      '@babel/env',
      {
        modules: false,
      },
    ],
  ]

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ]

  return {
    sourceType: 'module',
    // babelrcRoots: ['.', './node_modules/*'],
    presets,
    plugins,
  }
}
