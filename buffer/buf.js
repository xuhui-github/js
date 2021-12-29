var buf=new Buffer('hello world!');
console.log(buf);
buf=new Buffer('8b76fde713ce','base64');
console.log(buf);
buf=new Buffer(1024);
console.log(buf);
console.log(buf.length);
console.log();

buf=new Buffer(100);
for(var i=0;i<buf.length;i++)
  buf[i]=i;
console.log(buf);
console.log(buf.toString());

buf=new Buffer('this is the content of my buffer');
console.log(buf);
console.log(buf.toString());
var smallerBuffer=buf.slice(8,19);
console.log(smallerBuffer.toString());


var buffer1=Buffer.from('this is the content of my buffer');
var buffer2=Buffer.alloc(11);
var targetStart=0;
var sourceStart=8;
var sourceEnd=19;

buffer1.copy(buffer2,targetStart,sourceStart,sourceEnd);
console.log(buffer2.toString());


var str=buffer1.toString('utf-8');
console.log('str',str);

var str1=new String("hello world",'base64');
console.log(str1.toString());
console.log(str1.toString('base64'));
var b64str=str1.toString('base64');
console.log(b64str);

