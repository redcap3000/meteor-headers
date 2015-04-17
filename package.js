Package.describe({
  name: 'redcap3000:server_headers',
  summary: 'Access HTTP headers on server only',
  version: "0.0.1",
  git: 'https://github.com/redcap3000/meteor-server_headers.git'
});

Npm.depends({
  'connect': '2.12.0'
});

Package.onUse(function(api) {
  api.versionsFrom("0.9.0");
  api.use(['webapp', 'livedata', 'templating', 'deps'], ['client', 'server']);
  api.use('appcache', 'server', { weak: true });
  api.use("meteorhacks:inject-initial@1.0.2", ['server', 'client']);

  api.addFiles('headers-common.js',  'server');
  api.addFiles('headers-server.js', 'server');
 

  api.export('headers', 'server');
});
