const Raven = require("raven");

function hasSentry() {
    return !!Raven.dsn;
}

function configureSentry() {
    if (!process.env.SENTRY_KEY || !process.env.SENTRY_PROJECT) {
        return false;
    }
    const key = process.env.SENTRY_KEY;
    const project = process.env.SENTRY_PROJECT;
    Raven.config(`https://${key}:<secret>@sentry.io/${project}`).install();
    return true;

    /**
     * TODO: implement a setContext() argument to log() and context() arg to configureSentry()
     Raven.context(function () {
       Raven.setContext({
         user: {
           email: 'matt@example.com',
           id: '123'
         }
       });
       // errors thrown here will be associated with matt
     });
     // errors thrown here will not be associated with matt
     */
}

function logSentry(x, cb) {
    if (!exports.hasSentry() || !process.env.PRODUCTION) {
        console.log("[SENTRY]", x);
        return cb();
    }
    Raven.send(x, cb);
}

exports = module.exports;
exports.hasSentry = hasSentry;
exports.configureSentry = configureSentry;
exports.logSentry = logSentry;