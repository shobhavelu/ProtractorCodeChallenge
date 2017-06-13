# Overview
This code repository consists of tests to load the Isentia (http://www.isentia.com/) website , navigate to product&services -> isentia.mediaportal page and verify the three modules of media portal displayed.Tests include verifying the number of modules displayed in the web page and the respective names.

## Features
* Tests are written in javascript, using NodeJS
* Tests are written against using protractor
* Tests cases describe expected behavior
* The structure follows Page object model
* Tests can be run on the command line using `npm test`
* Tests can be run against a configurable host, with `http://www.isentia.com/` as the default
* Tests can be configured to run various browser and OS combinations against a testing service (SauceLabs or BrowserStack)


## Steps to run the script
* Run the selenium server: webdriver -manager start
* To run tests locally: protractor configs/localconf.js
* To run tests in browserstack: protractor configs/browserstackconf.js


