# Foundation by ZURB — an advanced responsive web framework

> This is a "smart package" for use with the [Meteor open-source web platform](http://meteor.com/) and the [Meteorite package manager](http://oortcloud.github.io/meteorite/). It is meant to be downloadable from the [Atmosphere package repository](https://atmosphere.meteor.com/) or from [Github](https://github.com/ewall/meteor-foundation).

[Foundation](http://foundation.zurb.com/) is an advanced responsive web framework. It features a flexible grid useful for rapid prototyping and mobile-ready design, and the results are beautiful, readable web sites. Version 4 was built with "Mobile First" RWD, semantic-friendly markup, and all new JavaScript. (Note that version 4 no longer supports IE 7 & 8—so hopefully you don't have to either!)

Checkout the [Kitchen Sink page](http://foundation.zurb.com/docs/components/kitchen-sink.html) to view all the elements in their native splendor. Or browse the [Case Studies](http://foundation.zurb.com/case-jacquelinewest.php) to see some sites which were built with Foundation and get ideas how it can be tweaked and customized to fit your style.

## How to install 

1. `npm install -g meteorite` (if not already installed)
2. `mrt add foundation`
3. Minified CSS and JS files will be linked in your client-side code.
4. To initialize Foundation's JavaScripts, don't forget to include something like the following in your client-side JavaScript:

		if (Meteor.isClient) {
		  $(document).foundation(function (response) {
		      console.log(response.errors);
		  });
		}

## Version History

* 2013-06-04 v4.2.1 -- new Foundation version 4.2.1; added normalize.css
* 2013-05-21 v4.1.6r2 -- minor update to README.md, renamed 'lib' directory to 'client' for clarity
* 2013-05-06 v4.1.6 -- initial release of the package containing Foundation version 4.1.6

## Documentation

Detailed documentation can be found at [http://foundation.zurb.com/docs/](http://foundation.zurb.com/docs/)

### Getting Started

ZURB has provided some great [sample templates](http://foundation.zurb.com/templates.php) with a handful of common layouts which you could use to get started fast.

Charlie Guo and Kevin Xu have created some hands-on interactive tutorials to get you into using the HTML and CSS right away at the site [tryfoundation.io](http://tryfoundation.io/)

### Getting Help

* Join the [Foundation Framework Google Group](https://groups.google.com/forum/?fromgroups#!forum/foundation-framework-) and interact with other Foundation users.
* Report, research, and fix bugs on the [Github Issues page](http://github.com/zurb/foundation/issues).
* Follow [@foundationzurb](http://twitter.com/foundationzurb) on Twitter for news.
* If you're totally stuck and need some help, you can [email the friendly folks at ZURB](mailto:foundation@zurb.com) and they'll typically respond within a day or two.

## TODO

* Make an SCSS version of this package for SASS-y people? (Contact @ewall if you'd like to see that.)

## Just Because

<img src="http://foundation.zurb.com/files/mobile-first-1024x768.png" alt="The Foundation Yeti" width="512" height="384">
