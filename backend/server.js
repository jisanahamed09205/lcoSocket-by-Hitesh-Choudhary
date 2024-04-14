const app = require ("express") ();
const server = require ("http").createServer(app);
const io = require("socket.io")(server)
io.on("connection",(socket)=>{
    console.log('What is socket: ', socket);
    console.log('Connected');

    socket.on("chat",(payload)=>{
        console.log("What is payload: ", payload);
        io.emit("chat",payload)
    })
})