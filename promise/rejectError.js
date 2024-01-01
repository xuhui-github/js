Promise.reject(Error('bad news')).then(() => {
  console.log('This is never run');
}).then(() => {
  console.log('This is also never run');
}).catch((error) => {
  console.log('Something failed along the way, Insect error for more info.');
  console.log(error);
});

