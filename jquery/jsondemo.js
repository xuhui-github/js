var json='{"person" : { "age" : 20,"name" : "Jack"}}';
var jsondata=JSON.parse(json);
console.log(jsondata);
console.log(jsondata.person);
console.log(jsondata.person["age"]);
console.log(jsondata.person['name']);

var json={
  person: {
    age: 20,
    name : "Jack"
  }
}
console.log(JSON.stringify(json));

