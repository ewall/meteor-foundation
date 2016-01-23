Package.describe({
	name: "ewall:foundation",
	summary: "Foundation by ZURB - an advanced responsive web framework",
	version: "5.5.3",
	git: "https://github.com/ewall/meteor-foundation"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
	api.use('jquery', 'client');
	api.use('cwaring:modernizr', 'client');

	var path = Npm.require('path');
	api.add_files(path.join('css', 'normalize.css'), 'client');
	api.add_files(path.join('css', 'foundation.min.css'), 'client');

	api.add_files(path.join('js', 'vendor', 'fastclick.js'), 'client');
	api.add_files(path.join('js', 'vendor', 'jquery.cookie.js'), 'client');
	api.add_files(path.join('js', 'vendor', 'placeholder.js'), 'client');
	api.add_files(path.join('js', 'foundation.min.js'), 'client');
	api.add_files(path.join('js', 'activate-foundation.js'), 'client');
});