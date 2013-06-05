Package.describe({
  summary: "Foundation by ZURB - an advanced responsive web framework"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'client/custom.modernizr.js',
    'client/foundation.min.css',
    'client/foundation.min.js',
    'client/normalize.css'
  ], 'client'
  );
});
