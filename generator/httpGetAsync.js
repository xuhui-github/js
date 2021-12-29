let http=require('http');
function httpGetAsync(url,callback){
  return http.get(url,
    function(response){
      var body='';
      response.on('data',function(d){
	body += d;
      });

      response.on('end',function(){
	let parsed=JSON.parse(body);
	callback(parsed);
      });
    }
  );
}

httpGetAsync('http://open.iciba.com/dsapi/?date=2019-05-03&file=json',(data) => {
  console.log(data);
});


let generator;
function request(url){
  httpGetAsync(url,function(response){
    generator.next(response);
  });
}

function *main(){
  let dataJson=yield request('http://open.iciba.com/dsapi/?date=2019-05-03&file=json');
  let note =yield dataJson.note;
  console.log('************************************');
  console.log(dataJson);
  
}

generator=main();
generator.next();
