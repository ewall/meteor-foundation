Package.describe({
	name: "ewall:foundation",
	summary: "Foundation by ZURB - an advanced responsive web framework",
	version: "5.5.3_1",
	git: "https://github.com/ewall/meteor-foundation",
	deprecated: true
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@0.9.0");
	api.use('jquery', 'client');

	var path = Npm.require('path');
	api.addFiles(path.join('css', 'normalize.css'), 'client');
	api.addFiles(path.join('css', 'foundation.min.css'), 'client');

	api.addFiles(path.join('js', 'vendor', 'modernizr.js'), 'client');
	api.addFiles(path.join('js', 'vendor', 'fastclick.js'), 'client');
	api.addFiles(path.join('js', 'vendor', 'jquery.cookie.js'), 'client');
	api.addFiles(path.join('js', 'vendor', 'placeholder.js'), 'client');
	api.addFiles(path.join('js', 'foundation.min.js'), 'client');
	api.addFiles(path.join('js', 'activate-foundation.js'), 'client');
});
