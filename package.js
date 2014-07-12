Package.describe({
	summary: "Foundation by ZURB - an advanced responsive web framework"
});

Package.on_use(function (api) {
	api.use('jquery', 'client');

	var path = Npm.require('path');
	api.add_files(path.join('css', 'normalize.css'), 'client');
	api.add_files(path.join('css', 'foundation.min.css'), 'client');

	api.add_files(path.join('js', 'vendor', 'modernizr.js'), 'client');
	api.add_files(path.join('js', 'vendor', 'fastclick.js'), 'client');
	api.add_files(path.join('js', 'vendor', 'jquery.cookie.js'), 'client');
	api.add_files(path.join('js', 'vendor', 'placeholder.js'), 'client');
	api.add_files(path.join('js', 'foundation.min.js'), 'client');
	api.add_files(path.join('js', 'activate-foundation.js'), 'client');
});