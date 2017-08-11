/**
 * Created by bubble on 17-8-11.
 */
var socket = io();

socket.on('online', function (msg) {
  showMsg(1);
});

socket.on('offline', function (msg) {
  showMsg(0);
});