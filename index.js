const { path } = require('@vuepress/shared-utils')

module.exports = (options) => ({
  define: {
    selector: options.selector || '.hero',
    badgeLink: options.badgeLink,
    repoLink: options.repoLink,
    badgeGroup: options.badgeGroup
  },
  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js')
})