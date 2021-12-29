var promise=new Promise(
  function(resolve,reject){
    resolve(Math.PI);
    reject(0);
    resolve(Math.sqrt(-1));
  });
promise.then(function(number){
  console.log('The number is '+number);
});
