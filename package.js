Package.describe({
	summary: "Foundation by ZURB - an advanced responsive web framework"
});

Package.on_use(function (api) {
	api.use('jquery', 'client');

	var path = Npm.require('path');
	api.add_files(path.join('client', 'normalize.css'), 'client');
	api.add_files(path.join('client', 'foundation.min.css'), 'client');

	api.add_files(path.join('client', 'custom.modernizr.js'), 'client');
	api.add_files(path.join('client', 'foundation.min.js'), 'client');
	api.add_files(path.join('client', 'activate-foundation.js'), 'client');
});