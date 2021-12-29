let https=require('https');
function httpGetAsync(url,callback){
  return https.get(url,
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

httpGetAsync('https://www.sojson.com/open/api/weather/json.shtml?city=沧州',(data) => {console.log(data);});

