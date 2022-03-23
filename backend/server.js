const { Socket } = require('socket.io');

const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        
    },
});

io.on("connection", (Socket) => {
    console.log("What is socket: ", Socket);
    console.log("Socket is active to be connected");

    Socket.on("chat", (payload) => {
        console.log("what is payload", payload);
        io.emit("chat", payload);
    });
});

//app.listen(5000, () => console.log("server is active..."));

server.listen(5000, () => {
    console.log("Server is listening at port 5000...");
})