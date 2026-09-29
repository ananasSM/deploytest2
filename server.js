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
});const express = require("express");

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
});const express = require("express");

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
});const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Node.js app is working');
});

const socket = process.env.SOCKET;

if (!socket) {
  console.error('SOCKET is not defined');
  process.exit(1);
}

console.log(`Starting server on socket: ${socket}`);

app.listen(socket, () => {
  console.log(`Server is listening on ${socket}`);
});
