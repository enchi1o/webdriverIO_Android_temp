exports.config = {
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances: 1,
    sync: true,
    specs: [
        // './PlayWithMocha.js'
        // './api/click.js'
        './api/getText.js'
    ],
    capabilities: [{
        "udid": "f659747e",
        "platformName": "Android",
        "platformVersion": "10",
        "appPackage": "com.wdiodemoapp",
        "appActivity": "com.wdiodemoapp.SplashActivity",
        "automationName": "UiAutomator2"
    }]
}