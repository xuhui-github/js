var MongoClient =require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',
  function(err,client){
    console.log('Connecting to MongoDB');
    db=client.db('testdb');
    var collection = db.collection('users');
    collection.insert({'title' : 'Snowcrash'},
      function(err,docs){
	console.log(docs.length + ' record inserted');
	console.log( docs);
      });
  });


