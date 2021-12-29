function sayLoudly(){
  console.log(this.firstName.toUpperCase());
}

var newObject={
  firstName: 'frank',
  sayName: function(){console.log(this.firstname);},
  sayLoudly: sayLoudly,
  LastName: {
    lastName: "Zammetti",
    sayName: function() { console.log(this.lastName);}
  }
}
newObject.LastName.sayName();

function newClass(){
  console.log('constructor');
  this.firstname='frank';
  this.sayName=function(){
    console.log(this.firstname);
  };
}

var nc=new newClass();
nc.sayName();

function newClass(){
  this.name='frank';
}
newClass.prototype.sayName=function(){
  console.log(this.name);
};
var nc=new newClass();
nc.sayName();

