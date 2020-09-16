const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


const PORT = process.env.PORT || 5000;


io.on('connection', socket => {
    socket.emit('message', "Hello from server");
    socket.on("audio", element => {
        io.emit("audioFromServer", element);
    });
});



server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));