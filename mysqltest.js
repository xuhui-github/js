


var mysql=require('mysql');

var con=mysql.createConnection({host: 'localhost',user: 'xuhui',password: 'flower'});
con.connect(function(err){
if(err){
    console.err('error connection: '+err.stack);
    
}
    console.log('connected as id ' + con.threadId);
    con.end();
});



