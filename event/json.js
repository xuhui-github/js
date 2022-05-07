var accountStr=' { 'name':"Jedi",
                 "members": ["Yoda,Obi Wan"],
                 "number": 34512,
                 "location": "A galaxy far,far away"} ';
var accountObject=JSON.parse(accountStr);
console.log(accountObject.name):
console.log(accountObject.location);

var accountObj={
  name: "Baggins",
  number: 10645,
  members: ["Frodo, Bilbo"],
  location: "Shire"
};

var accountStr=JSON.stringify(accountObj);
console.log(accountStr);

