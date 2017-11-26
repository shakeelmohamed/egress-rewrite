const assert = require("assert");
const utils = require("../lib/utils");

describe("hasSentry()", function() {
    it("return false with empty process.env", function() {
        process.env = {};
        assert(!utils.hasSentry());
    });
});

describe("configureSentry()", function() {
    it("should short-circuit with empty process.env", function() {
        process.env = {};
        assert(!utils.configureSentry());
        assert(!utils.hasSentry());
    });
    it("should set key and project", function() {
        process.env.SENTRY_KEY = "abc";
        process.env.SENTRY_PROJECT = "alphabet";
        assert(utils.configureSentry());
        assert(utils.hasSentry());
    });
});

describe("logSentry()", function() {
    it("should short-circuit with empty process.env", function(done) {
        process.env = {};
        utils.logSentry(null, function(err) {
            assert(!err);
            done();
        });
    });
});