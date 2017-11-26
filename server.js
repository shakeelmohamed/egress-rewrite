const express = require("express");
const Raven = require("raven");

const app = module.exports = express();

app.use(Raven.requestHandler());

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.use(Raven.errorHandler());
// TODO: fallthrough error handler