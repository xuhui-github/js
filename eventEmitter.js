var events=require('events');
var emitter=new events.EventEmitter();
emitter.emit("simpleEvent");

function MyObject(){
  events.EventEmitter.call(this);
}
MyObject.prototype.__proto__=events.EventEmitter.prototype;
var myObject=new MyObject();

myObject.on("someEvent from myObject",function(){
  console.log("myObject got event");
});
myObject.emit("someEvent from myObject");

