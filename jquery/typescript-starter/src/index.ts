import * as http from 'http';
//import * as mongoose from 'mongoose';
import mongoose from 'mongoose';
console.log("HelloWorld!");
//mongoose.connect('mongodb://localhost:27017/books',{useMongoClient: true});
mongoose.connect('mongodb://localhost:27017/books',{useNewUrlParser : true,useUnifiedTopology : true});
const portNumber=8080;

function requestListener(request : http.IncomingMessage,response : http.ServerResponse){
  response.writeHead(200,{'Content-Type' : 'text/plain'});
  response.write('Response Text Here');
  response.end();
}

http.createServer(requestListener).listen(portNumber);
console.log("Listening on localhost:"+portNumber);


