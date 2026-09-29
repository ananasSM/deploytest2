const express = require('express');

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
