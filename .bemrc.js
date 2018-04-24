module.exports = {
  levels: [
    {
      layer: 'common',
      path: 'src/common',
      scheme: 'nested'
    },
    {
      layer: 'desktop',
      path: 'src/desktop',
      scheme: 'nested'
    },
    {
      layer: 'touch',
      path: 'src/touch',
      scheme: 'nested'
    },
    {
      layer: 'tablet',
      path: 'src/tablet',
      scheme: 'nested'
    },
    {
      layer: 'mobile',
      path: 'src/mobile',
      scheme: 'nested'
    },
  ],
  // remove sets to build one universal bundle for index.html
  sets: {
    desktop: 'common desktop',
    tablet: 'common touch tablet',
    mobile: 'common touch mobile',
  },
  modules: {
    'bem-tools': {
      plugins: {
        create: {
          levels: {
            'src/common': { default: true }
          },
          techs: ['js', 'css'],
          templates: {
            js: '.bem/templates/js.js'
          }
        }
      }
    }
  }
}
