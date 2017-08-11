/**
 * Created by bubble on 17-8-11.
 */

let io = require('socket.io')();

io.on('connection', function (socket) {
  console.log('a user connected' + socket);
});

exports.listen = function(_server){
  io.listen(_server);
};