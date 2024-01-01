function rejectWith(val){
  return new Promise((resolve, reject)=> {
    throw Error(val);
    resolve('Not bad');
  });
}

rejectWith('bad news').then(() => {
  console.log('This is never run');
}).catch(
  (error) => {
    console.log('Failed again!');
    console.log(error);
  });
