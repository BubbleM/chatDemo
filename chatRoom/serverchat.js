/**
 * Created by bubble on 17-8-11.
 */
var io = require('socket.io')();

io.on('connection', function (socket) {
  console.log('a user connected');
});

exports.listen = function(_server){
  io.listen(_server);
};