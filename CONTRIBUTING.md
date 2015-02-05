CONTRIBUTING
============

* Open a [Pull Request (PR)](https://github.com/atparkerb/angular-kana/pull/new/master)
* Make sure your PR is on a **new branch** you created off of the latest version of master
* Do **not** open a PR from your master branch
* Make sure all previous tests pass and add new tests for added behaviors

##Requirements

* [NodeJS + NPM](http://nodejs.org/)
* [Grunt](http://gruntjs.com/)
* [Bower](http://bower.io/)
* [Testem](https://github.com/airportyh/testem)
* [Protractor](https://github.com/angular/protractor)

##Running Unit tests

1. Start grunt:
	* `grunt`
2. Start testem:
	* `testem`
3. Edit code and Testem page will automatically refresh

##Running End to End tests

1. Setup a local server to run this directory on port 3333. Easiest method is httpster:
	* `httpster 3333`
2. Start the selenium webdriver:
	* `webdriver-manager start`
3. Run protractor:
	* `protractor protractor.config.js`
