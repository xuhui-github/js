function loadImage(url){
  var promise=new Promise(
    function resolver(resolve,reject){
      var img=new Image();
      img.url=url;

      img.onload=function(){
	resolve(img);
      };

      img.onerror=function(e){
	reject(e);
      };
    }
  );
  return promise;
}

