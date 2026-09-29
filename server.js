const express = require("express");

const app = express();

const socket = process.env.SOCKET;

if (!socket) {
    console.error("SOCKET is not defined");
    process.exit(1);
}

app.get("/", (req, res) => {
    res.send("Node.js version 1 works!");
});

app.listen(socket, () => {
    console.log(`Listening on ${socket}`);
});
