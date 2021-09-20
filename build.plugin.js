const globals = [
  './src/variables.scss',
  './src/mixins.scss',
  './src/functions.scss',
];

module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    ['scss', 'scss-module'].forEach((key) => {
      config.module.rule(key)
        .use('sass-resources-loader')
        .loader(require.resolve('sass-resources-loader'))
        .options({
          resources: globals,
        });
    });
  });
};
