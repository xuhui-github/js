var count=0;
export function next(){return ++count;} //module.exports.next=function(){...}
function squared(){
  return Math.pow(count,2);
}
export function hello(){
  return "Hello, world!";
}
export default function(){ //can be done once per module,and is the default export from the module,the defult export is what code outside the module access when using the module object itself.
  return count;
}
export const meaning=42;
export let nocount=1;
export {squared}; // export squared function defined before.

