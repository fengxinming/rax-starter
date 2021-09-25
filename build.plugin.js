const { join } = require('path');

module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    ['styl', 'styl-module'].forEach((key) => {
      config.module.rule(key)
        .use('stylus-loader')
        .tap((options) => {
          let { stylusOptions } = options;
          if (!stylusOptions) {
            stylusOptions = {};
            options.stylusOptions = stylusOptions;
          }

          let imports = stylusOptions.import;
          if (!imports) {
            imports = [];
            stylusOptions.import = imports;
          }
          imports.push(
            join(__dirname, 'src/styl/variables.styl'),
            join(__dirname, 'src/styl/functions.styl'),
            join(__dirname, 'src/styl/mixins.styl'),
          );
          return options;
        });
    });
  });
};
