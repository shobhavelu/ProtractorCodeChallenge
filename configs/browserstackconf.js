exports.config = {
    framework: 'jasmine',

    seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
    onPrepare: function() {

        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    },
      suites: {
          specs: '../specs/test.spec.js'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        includeStackTrace: true
    },

    commonCapabilities: {
        'browserstack.user': 'shobhavajravelu1',
        'browserstack.key': 'NVPPrtkZEEonguRDWDUd'
    },

    multiCapabilities: [{
        'os': 'Windows',
        'os_version': '8',
        'browserName': 'Chrome',
        'browser_version': '59.0',
        'resolution': '1024x768'
     },{
        'os': 'Windows',
        'os_version': '8',
        'browserName': 'IE',
        'browser_version': '10.0',
        'resolution': '1024x768'
     },{
        'os': 'OS X',
        'os_version': 'Sierra',
        'browserName': 'Safari',
        'browser_version': '10.1',
        'resolution': '1024x768'
        }
    ]
};

exports.config.multiCapabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
