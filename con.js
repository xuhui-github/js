var mysql = require('mysql');

console.log;
var con = mysql.createConnection({ host: '127.0.0.1', user: 'xuhui', password: 'flower' });
con.connect(function (err) {
    if (err) {
        console.log('error connection: ' + err.stack);


        return;
    }
    console.log('connected as id ' + con.threadId);

});
