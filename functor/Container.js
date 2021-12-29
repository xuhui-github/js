const Container=function(val){
  this.val=val;
}

let testValue=new Container(3);
let testObj=new Container({a: 1});
let testArray=new Container([1,2]);

Container.of=function(value){
  return new Container(value);
}

testValue=Container.of(3);
testObj=Container.of({a: 1});
testArray=Container.of([1,2]);
console.log(Container);
console.log(testValue);


Container.prototype.map=function(fn){
  return Container.of(fn(this.value));
};

let double=(x) => x+x;
Container.of(3).map(double);
console.log(Container)

Container.of(3).map(double).map(double).map(double);


