mockjs =require('mockjs');
var result=mockjs.mock('api/user','get', {

 code: 100,
 data: {
 id: '@id',
 name: '@name',
 age: '@integer(20,50)',
 },
 });
console.log(result);
