Package.describe({
  summary: 'Foo',
  version: '1.0.0',
  name: 'foo',
  documentation: null,
});

Package.onUse(function(api) {
  api.versionsFrom("1.5.2");
  api.use([
    'meteor',
    // 'bar'
  ]);
  api.mainModule('main.js', 'client');
  api.mainModule('main.js', 'server');
});