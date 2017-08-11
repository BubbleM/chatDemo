/**
 * Created by bubble on 17-8-11.
 */
var io = require('socket.io')();

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () { // 断开连接只会发生在客户端建立连接以后
    console.log('user disconnected');
    io.emit('offline', '');
  });

  io.emit('online', '');
});

exports.listen = function(_server){
  io.listen(_server);
};