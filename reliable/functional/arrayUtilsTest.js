import arrayUtils from './lib/arrayUtils.js';
var a=[1,2,4];
var result=arrayUtils.map(a,(i)=>{
  return i*i;
}
);

console.log(result);
