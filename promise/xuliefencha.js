var p=Promise.resolve(21);

p.then(function(msg){
  return msg*2;
}).then(function(msg){
  console.log(msg);
});

//分叉2
p.then(function(msg){
  console.log(msg);
});


var q=Promise.resolve();
q.then(function(){
  console.log("step1");
  console.log(1);
}).then(function(){
  console.log("step2");
  console.log(2);
}).then(function(){
  console.log("step3");
  console.log(3);
});
