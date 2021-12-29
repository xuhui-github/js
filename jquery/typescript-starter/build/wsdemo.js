"use strict";
var webSocket = new WebSocket('ws://localhost:8080/WS');
webSocket.onmessage = function (message) {
    console.log(message.data);
};
webSocket.send('Message to Server');
