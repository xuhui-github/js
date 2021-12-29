const forEach=(thearray,fn) => {
  let i=0;
  for(i=0;i<thearray.length;i++)
    fn(thearray[i]);
}

const every=(arr,fn) => {
  let result=true;
  for(let i=0;i<arr.length;i++)
    result=result && arr[i];
  return result;
}

const everyNewSyntax=(arr,fn) => {
  let result=true;
  for(const elem of arr)
    result=result && elem;
  return result;
}

const some=(arr,fn) => {
  let result=false;
  for(const elem of result)
    result=result || elem;
  return result;
}


export default forEach;
export {some};
