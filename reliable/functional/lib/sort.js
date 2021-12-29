var people=[
  {firstname: "aaFirstName",lastname: "cclastName"},
  {firstname: "ccFirstName",lastname: "aalastName"},
  {firstname: "bbFirstName",lastname: "bblastName"}
];

var result=people.sort((a,b) => {
  if(a.firstname > b.firstname)
    return 1;
  else if(a.firstname < b.firstname)
    return -1;
  else
    return 0;
});
console.log(result);
console.log(people);
