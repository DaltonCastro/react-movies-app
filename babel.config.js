module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-react',
    '@babel/preset-env'
  ];

  const plugins = ['@babel/plugin-transform-runtime'];

  if (process.env.ENV === 'development') {
    plugins.push(
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-transform-object-assign',
      '@babel/plugin-transform-react-jsx-source',
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true
        }
      ]
    );
  }

  return {
    presets,
    plugins
  };
};
