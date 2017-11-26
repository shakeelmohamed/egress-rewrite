const express = require("express");
const Raven = require("raven");
const utils = require("./utils");

const app = module.exports = express();

if (utils.hasSentry()) {
    app.use(Raven.requestHandler());
}

app.get("/", (req, res) => {
    res.send("Welcome");
});

if (utils.hasSentry()) {
    app.use(Raven.errorHandler());
}
// TODO: fallthrough error handler