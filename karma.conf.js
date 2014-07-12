module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // frameworks to use
    frameworks: ['jasmine'],

    files: [
        {pattern: 'css/normalize.css', watched: true, served: true, included: true},
        {pattern: 'css/foundation.min.css', watched: true, served: true, included: true},
        {pattern: 'js/vendor/modernizr.js', watched: true, served: true, included: true},
        {pattern: 'js/vendor/fastclick.js', watched: true, served: true, included: true},
        {pattern: 'js/vendor/jquery.js', watched: true, served: true, included: true},
        {pattern: 'js/vendor/placeholder.js', watched: true, served: true, included: true},
        {pattern: 'js/vendor/jquery.cookie.js', watched: true, served: true, included: true},
        {pattern: 'js/foundation.min.js', watched: true, served: true, included: true},
        {pattern: 'spec/**/*.html', watched: true, served: true, included: true},
        {pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js', watched: true, served: true, included: true},
        {pattern: 'spec/helpers.js', watched: true, served: true, included: true},
        {pattern: 'spec/**/*.js', watched: true, served: true, included: true},
        {pattern: 'spec/**/*.gif', watched: true, served: true, included: false}
    ],

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['SmallPhantomJS', 'LargePhantomJS', 'LargeChrome', 'Firefox'],

    customLaunchers: {
        SmallChrome: {
            base: 'Chrome',
            flags: ['--window-size=320,400']
        },
        LargeChrome: {
            base: 'Chrome',
            flags: ['--window-size=1025,400']
        },
        SmallPhantomJS: {
            base: 'PhantomJS',
            options: {
                viewportSize: { width: 320, height: 400 }
            }
        },
        LargePhantomJS: {
            base: 'PhantomJS',
            options: {
                viewportSize: { width: 1025, height: 400 }
            }
        }
    },

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
