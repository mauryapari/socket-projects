import express  from "express";
import {createServer} from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
// import { Server } from "socket.io";


const app = express();
const server = createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin:"http://localhost:3000",
//         methods: ["GET", "POST"]
//     }
// });


// let rooms = 0;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static('.'));

app.get('/', (req, res) => {
    // res.send("<h1>Hello world</h1>");
    res.sendFile(join(__dirname, 'index.html'));
});

// io.on('connection', (socket) => {
//     console.log('a user connected');
//   // socket.on('createGame', (data) => {
//   //   socket.join(`room-${++rooms}`);
//   // })
//     socket.emit(`newGame`, {name: 'game', room: `room-${rooms}`});
//
//   socket.on('joinGame', (data) => {
//     let room = io.nsps['/'].adapter.rooms(data.room);
//     if (room && room.length === 1) {
//       socket.join(data.room);
//       socket.broadcast.to(data.room).emit('player1', {});
//       socket.emit('player2', { name: data.name, room: data.room });
//     } else {
//       socket.emit('err', {message: 'Sorry, This room is full!'});
//     }
//   });
//
//   socket.on('playerTurn', (data) => {
//     socket.broadcast.to(data.room).emit('turnPlayed', {
//       tile: data.tile,
//       room: data.room
//     })
//   });
//
//   socket.on('gameEnded', (data) => {
//     socket.broadcast.to(data.room).emit('gameEnded', data);
//   })
// })
//
server.listen(3000, ()=>{
    console.log('server running at http://localhost:3000');
});
