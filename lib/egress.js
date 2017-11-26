const dotenv = require("dotenv");
const utils = require("./utils");
const server = require("./server");

dotenv.config();
utils.configureSentry();

const port = process.env.PORT || 5000;
server.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Listening on port ${port}.`);
});

exports = module.exports;
exports.utils = utils;
exports.server = server;