function * generatorSequence(){
  yield 'first';
  yield 'second';
  yield 'third';
}

let gen=generatorSequence();
console.log('done value for the first time',gen.next());
console.log('done value for the second time',gen.next());
console.log('done value for the third time',gen.next());

console.log(gen.next());

for(let value of generatorSequence())
  console.log('for of value of generatorSequence is ',value);

function * sayFullName(){
  var firstName=yield;
  var secondName=yield;
  console.log(firstName+secondName);
}

let fullName=sayFullName();
fullName.next();
fullName.next('anto');
fullName.next('aravintn');

