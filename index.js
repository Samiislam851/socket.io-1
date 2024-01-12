const express = require('express')
// const html  = require('./socket.html')
const cors = require('cors')
const app = express()

// Use CORS middleware
app.use(cors());
const port = 3000





const http = require('http') // import http module           STEP : 1

const server = http.createServer(app) // create an HTTP server  STEP : 2 
const { Server } = require('socket.io') // import the Server class from socket.io  STEP : 3 

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Replace with  React app's address
        methods: ["GET", "POST"]
    }
})                                       // pass that server to the socket.io  and create a new object  STEP : 4 

// this will connect the servers. Both FE and BE




////////////// STEP : 5 listen for events

// io.on('connection',  //this is an event listener 
//     (socket) => {
//         console.log('user connected');




//         let count = 0;

//         // setInterval(() => {
//         //     socket.emit('myEvent', { data: `data from server by socket${count}` })
//         //     count++
//         // }, 1000);

//         //  receive form server

//         socket.on('myEvent', (data) => {
//         console.log(data);
//         })


//         socket.on('disconnect',   // this is also an event listener
//             () => {
//                 console.log('user disconnected');
//                 // clearInterval(intervalId)
//             })
//     })

/////////////////////////////BROADCAST////////////////////////////////
io.on('connection', (socket) => {
    console.log('user connected')


    io.sockets.emit('myBroadcastEvent', 'Broadcast message')

    io.emit('myevent2', { message: 'message' })

    socket.emit('myevent2', { message: 'message' })

    socket.on('disconnect', () => {
        console.log('user Disconnected');
    })
})

const buyNsp = io.of('/buy')
buyNsp.on('connection', (socket) => {
    console.log('user Connected to buy');


    socket.emit('MyEvent', 'connected to BUY')


})


const sellNsp = io.of('/sell')
sellNsp.on('connection', (socket) => {
    console.log('connected on sell');

    socket.emit('MyEvent', 'from sell Name Space')
    socket.on('disconnect', () => {
        console.log('disconnected');
    })


})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})