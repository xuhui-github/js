var fs=require('fs');
var data='test';

var writeStream=fs.createWriteStream('dest.txt');

writeStream.write(data,'utf-8');
writeStream.end();
writeStream.on('finish',function(){
  console.log('finish writing');
});

writeStream.on('error',function(err){
  console.log(err.stack);
});

