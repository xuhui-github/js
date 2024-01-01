const { MongoClient }= require('mongodb');
const url = 'mongodb://localhost:27017';
const client=new MongoClient(url);

const dbname='testdb';
async function main(){
  await client.connect();
  console.log('Connected to testdb');
  const db = client.db('testdb');
  const collection = db.collection('testing');
  const insertResult=await collection.insertMany([{a: 1},{a: 2},{a: 3}]);
  console.log('Inserted documents =>' + insertResult);
  return 'done';
}

main().then(console.log).catch(console.error).finally(()=>client.close());
