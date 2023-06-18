const socketIO = require('socket.io');
const jwt = require('jsonwebtoken');

const config = require('../config/config');
const { User } = require('../models');
const Chat = require('../models/chat.model');

const initSockets = (server) => {
  const io = socketIO(server, {
    cors: {
        origin: '*',
    }
  });

  Chat.watch().on('change', (data) => {

    const { operationType, fullDocument } = data;

    if(operationType === 'insert') {
      io.to(fullDocument.to).emit('message', fullDocument);
      io.to(fullDocument.from).emit('message', fullDocument);
    }
  });

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Authentication error'));
    } 

    jwt.verify(token, config.jwt.secret, async (err, decoded) => {
        if (err) {
            return next(new Error('Authentication error'));
        }
        socket.decoded = decoded;
        const user = await User.findById(decoded.sub);
        if (!user) {
            return next(new Error('Authentication error'));
        }

        socket.user = user;
        next();
    });

  });

  io.on('connection', (socket) => {
    console.log('New client connected');
    socket.join(socket.user._id.toString());
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

module.exports = initSockets;
