let a=[0,1,2,4,5,3];
let total=0;
for(let i=0;i<a.length;i++)
  total+=a[i];
console.log(total);

total=0;
for(let value of a)
  total+=value;
console.log(total);
