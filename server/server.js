const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
    res.status(200).send(<h1>TIS WORKING</h1>)
});

server.post('/', async (req, res) => {

})

server.delete('/:id', (req,res) => {
    
})

module.exports = server;