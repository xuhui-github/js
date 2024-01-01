Promise.resolve('ta-da').then(
  (result) => {
    console.log('step 2 received ' + result);
    return 'Greetings forom step 2'
  }).then((result) => {
    console.log('step3 received ' + result);
  }).then((result) => {
    console.log('step 4 received ' + result);
    return Promise.resolve('fulfilled value');
  }).then((result)=> {
    console.log('step 5 received ' + result);
  });

