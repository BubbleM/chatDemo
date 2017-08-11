/**
 * Created by bubble on 17-8-11.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  // res.send('<h1>Hello world</h1>');
  // res.sendFile(__dirname + '/index.html');
  res.sendfile('index.html');
});

io.on('connection', function (socket) {
  console.log('a user connected' + socket);
  socket.on('disconnect', function () { // 断开连接只会发生在客户端建立连接以后
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){ //　服务器端传输消息的管道
    console.log('message: ' + msg);
    io.emit('chat message', msg); // 将消息转发到所有的客户端
  });
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});