var promise=new Promise(function(resolve,reject){
  console.log('Inside the resolve function');
  resolve();
});

promise.then(function(){
  console.log('Inside the onFulfilled handler');
});

console.log('This is the last line of the script');

