var fs=require('fs');
fs.stat("nexttick.js",function(){
  console.log("nexttick.js Exists");
});

setImmediate(function(){
  console.log("Immediate Timer 1 executed");
});
setImmediate(function(){
  console.log("Immediate Timer 2 executed");
});

process.nextTick(function(){
  console.log("Next Tick 1 Executed");
});

process.nextTick(function(){
  console.log("Next TIck 2 Executed");
});

