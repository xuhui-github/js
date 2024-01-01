console.log("test...");
const MongoClient = require('mongodb').MongoClient;
const assert=require('assert');

const url='mongodb://localhost:27017';
const dbname='testdb';

const client=new MongoClient(url);
client.connect(function(err,client){
  assert.equal(null,err);
  console.log('Connected correctly to server');
  const db=client.db(dbname);
  const collection=db.collection('users');
  collection.findOne({},
    (error,item) => {
      if(error){
	console.error(error);
	process.exit();
      }
      console.log('find '+item._id + ' ' + item.username + ' ' + item.addr);
    });
});
client.close();



