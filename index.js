require("dotenv").config();

const server = require("./server/server.js");

const port = process.env.PORT || 4444;

server.listen(port, () => {
  console.log(`\n *** SERVER UP AND RUNNING ON PORT ${port} ***`);
});
