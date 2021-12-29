new Promise(function(resolve,reject){
  reject('long rejection');
});
Promise.reject('short rejection');
