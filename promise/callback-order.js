var promise = new Promise((resolve,reject)=> {
  console.log('Inside the resolver function');
  resolve();
});

promise.then(() => {
  console.log('Inside the onFulfilled handler');
});

console.log('This is the last line of the scrit');

