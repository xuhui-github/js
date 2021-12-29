const webSocket=new WebSocket('ws://localhost:8080/WS');

webSocket.onmessage= (message: MessageEvent) => {
  console.log(message.data);
}

webSocket.send('Message to Server');
