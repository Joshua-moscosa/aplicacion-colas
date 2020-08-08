const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();

let server = http.createServer(app);

let port = process.env.PORT || 3000;
let publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));

module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {
    if (err) throw new Error(err);

    console.log(`Corriendo servidor en el puerto ${ port }`);
});