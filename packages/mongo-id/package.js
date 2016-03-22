Package.describe({
  summary: "JS simulation of MongoDB ObjectIDs",
  version: '1.0.2-rc.7',
  documentation: null
});

Package.onUse(function (api) {
  api.export('MongoID');
  api.use(['ejson', 'id-map', 'random']);
  api.addFiles([
    'id.js'
  ]);
});
