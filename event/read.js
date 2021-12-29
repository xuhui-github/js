var fs=require('fs');
fs.readFile('/etc/passwd',function(err,filecontent){
  if(err)
    throw err;
  console.log('file content',filecontent.toString());
});


let options;
var http=require('http');
var req=http.request(options,function(response){
  response.on("data",function(data){
    console.log("some data from the response",data);
  });
  response.on('end',function(){
    console.log('response ended');
  });
});

req.end();

