//Let's use our generator
//knowledge to solve the current problem.
//We now change bothe the functions getDataOne
//and getDataTwo to use generator instance rather than callback
//for passing the data
 

let generator;
let getDataOne= () => {
  setTimeout( function(){
    generator.next('dummy data one');//changed the callback cb() to generator.next
  },1000);
}

let getDataTwo= () => {
  setTimeout(function(){
    //call the generator and
    //pass data via next
    generator.next('dummy data two');
  },1000);
}

function * main(){
  let dataOne=yield getDataOne();
  let dataTwo=yield getDataTwo();
  console.log('data one',dataOne);
  console.log('data two',dataTwo);
}

generator=main();
generator.next();
