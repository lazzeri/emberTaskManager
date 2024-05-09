const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

const isProduction = EmberApp.env() === 'production';

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\.config\.js$/],
        map: false,
        plugins: [
          tailwindcss('./tailwind.config.js'),
          autoprefixer,
        ],
      },
    },
  });

  return app.toTree();
};
