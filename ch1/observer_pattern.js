function Producer(){
  this.listeners=[];
}

Producer.prototype.add=function(listener){
  this.listeners.push(listener);
}

Producer.prototype.remove=function(listener){
  var index=this.listeners.indexOf(listener);
  this.listeners.splice(index,1);
}

Producer.prototype.notify=function(message){
  this.listeners.forEach(function(listener){
    listener.update(message);
  });
};

