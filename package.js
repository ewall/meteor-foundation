Package.describe({
  summary: "Foundation by ZURB - an advanced responsive web framework"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/custom.modernizr.js',
    'lib/foundation.min.css',
    'lib/foundation.min.js'
  ], 'client'
  );
});
