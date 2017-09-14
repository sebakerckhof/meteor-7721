Package.describe({
  summary: 'Bar',
  version: '1.0.0',
  name: 'bar',
  documentation: null,
});

Package.onUse(function(api) {
  api.versionsFrom("1.5.2");
  api.use([
    'meteor',
  ]);
  api.mainModule('main.js', 'client');
  api.mainModule('main.js', 'server');
});