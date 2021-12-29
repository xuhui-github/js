function newClass(){
  this.firstName="Frank";
  lastname="Zammetti";
}

var nc=new newClass();
console.log(nc.firstName);
//console.log(nc.lastname);

function newClass1(){
  this.firstName='frank';
  //this.toUC=String.toUpperCase;
  this.toUC=''.toUpperCase;
  this.toString=function(){
    return this.toUC.apply(this.firstName);
  };
}

var nc1=new newClass1();
console.log(nc1);
