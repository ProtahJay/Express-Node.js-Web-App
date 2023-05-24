const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
const xml2js = require('xml2js');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// socket connection
io.on('connection', (socket) => {
    console.log('Client connected');

    // Here you will handle the xml file reading and emitting
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
