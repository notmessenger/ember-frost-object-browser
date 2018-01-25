/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    babel: {
      optional: ['es7.decorators']
    },
    sassOptions: {
      includePaths: [
      ]
    },
    snippetSearchPaths: ['tests/dummy/app']
  })

  return app.toTree()
}
