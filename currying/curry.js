const identity=(x) => x;
const add=(x,y) => x+y;

function variadic(a){
  console.log(a);
  console.log(arguments);
  console.log(arguments[0]);
  
}
console.log(variadic(1));
console.log(variadic(1,2,3));



const fun1=(a,...rest) => {
  console.log(a);
  console.log(rest);
}
fun1(1,2,3);

const addCurried= x => y => x+y;
console.log(addCurried(4)(6));

function addCurried1(x){//addCurried(2)
  return function(y){ // function(y)
    return x+y;       // return x+y;
  };
}

console.log(addCurried1(1)(3));

const curry=(binaryFn) => {
  return function(firstArg) {
    return function(secondArg) {
      return binaryFn(firstArg,secondArg);
    };
  };
};


let autoCurriedAdd=curry(add);
autoCurriedAdd(2)(2);



const tableOf2=(y) => 2*y;
const tableOf3=(y) => 3*y;
const tableOf4=(y) => 4*y;

console.log('tableOf2',tableOf2(4));

const genericTable = (x,y) => x*y;
console.log('genericTable(2,2)',genericTable(2,2));
console.log('genericTable(2,3)',genericTable(2,3));
console.log('genericTable(2,4)',genericTable(2,4));

const tb2=curry(genericTable)(2);
const tb3=curry(genericTable)(3);
const tb4=curry(genericTable)(4);

console.log(tb2(2));
console.log(tb2(3));
console.log(tb2(4));


let mycurry=(fn) => {
  if(typeof fn != 'function'){
    throw Error('No function provided');
  }
  // return function curriedFn(...args){
  //  return fn.apply(null,args);
  //};

  return function curriedFn(...args){
    if(args.length<fn.length){
      return function(){
	return curriedFn.apply(null,args.concat([].slice.call(arguments)));
      };
    }
    return fn.apply(null,args);
  }
};

const multiply = (x,y,z) => x*y*z;

//let val=mycurry(multiply)(1,2,3);
let val=mycurry(multiply)(1)(2)(3);
console.log(val);

let curriedMul3=mycurry(multiply)(3);
let curriedMul2=curriedMul3(2);
let curriedMul1=curriedMul2(1);
console.log(curriedMul1);
