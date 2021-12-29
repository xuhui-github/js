function newClass(){
  this.name='frank';
}
newClass.prototype.sayName=function(){
  console.log(this.name);
};
var nc=new newClass();
nc.sayName();

