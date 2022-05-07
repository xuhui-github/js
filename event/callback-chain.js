function logCar(car,callback){
  console.log("Saw a %s",car);
  if(cars.length){
	process.nextTick(function(){
	  callback();
	});
  }
}

function logCars(cars){
  var car=cars.pop();
  logCar(car,function(){
	logCars(cars);//递归函数打印Saw a %s , car if(cars.length)是递归条件
  });
}

var cars=["Ferrari","Porsche","Bugatti","Lamborghini","Aston Martin"];
logCars(cars);
