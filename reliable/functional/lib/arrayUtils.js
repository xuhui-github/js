const map=(a,fn) => {
  const result=[];
  for(const val of a)
    result.push(fn(val))
  return result;
}

const arrayUtils={
  map: map
}
//arrayUtils.map=map;

export default arrayUtils;

