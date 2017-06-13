exports.config = {

    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    onPrepare: function() {

        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
       jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    },
    suites: {
        specs: '../specs/test.spec.js'
    },
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--start-maximized']
        }
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        includeStackTrace: true,
        print: function () {}
    }

};

