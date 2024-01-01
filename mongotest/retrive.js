var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/mongotest',

function(err, client) {

console.log('Connected to MongoDB!');
var db=client.db('mongotest');
var collection = db.collection('testing');

collection.insert({

'title': 'tom'

}, function(err, docs) {

console.log(docs.insertedCount + ' record inserted.');

console.log(docs);

collection.findOne({

title: 'tom'

}, function(err, doc) {

console.log(doc._id + '-' + doc.title);

client.close();

});

});
});

//find function(err result->
//{
//  result: { ok: 1, n: 1 },
//  ops: [ { title: 'tom', _id: 6573efc6cf759840717986fd } ],
//  insertedCount: 1,
//  insertedIds: { '0': 6573efc6cf759840717986fd }
//}

