const dotenv = require("dotenv");

const server = require("./server");

dotenv.config();

const port = process.env.PORT || 5000;
server.listen(port, (err) =>  {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Listening on port ${port}.`);
});