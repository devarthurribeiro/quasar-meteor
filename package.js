Package.describe({
  summary: 'Integration Quasar Framework',
  version: '0.0.1',
  name: 'devarthurribeiro:quasar-meteor',
  git: 'https://github.com/devarthurribeiro/quasar-meteor'
})

Package.onUse((api) => {
  api.use('ecmascript')
  api.use('modules')
  api.addFiles('quasar.mat.css', 'client')
  api.mainModule('quasar.esm.js', 'client');
})
